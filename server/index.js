require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socket = require('socket.io');

const app = express();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const yelpRouter = require("./controllers/yelp");

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
app.use("/yelp-get", yelpRouter);

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

const io = socket(app.server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

io.on('connection', (socket) => {
  console.log(`Connecting with ${socket.id}`);

  socket.on('send-message', (message, room, username) => {
    if (room) {
      console.log(`Message is ${message}`);
      console.log(`Room is ${room}`);
      console.log(`Sender is ${username}`);

      const data = {
        message,
        room,
        username,
      };

      socket.to(room).emit('receive-message', data);
    }
  });

  socket.on('join-room', (room, cb) => {
    socket.rooms.forEach((roomName) => {
      socket.leave(roomName);
    });

    socket.join(room);
    cb(`You joined room: ${room}`);
  });

  socket.on('submit-ready', (data, sender, guestLocation) => {
    // dummy coordinates of Morningside Heights
    guestLocation[0] = 40.8075;
    guestLocation[1] = -73.9626;
    console.log(`Socket receiving ${data} from ${sender} in location ${guestLocation}`);
    let room;
    socket.rooms.forEach((roomName) => {
      room = roomName;
    });
    socket.to(room).emit('user-ready', data, sender, guestLocation);
  });

  socket.on('send-yelp', (data, sender) => {
    let room;
    socket.rooms.forEach((roomName) => {
      room = roomName;
    });
    socket.to(room).emit('retrieve-yelp', data, sender);
  });

  socket.on('disconnect', () => {
    console.log('Socket has disconnected');
  });
});

module.exports = app;

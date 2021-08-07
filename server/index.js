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

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

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

  socket.on('send-message', (message, room, sender) => {
    if (room) {

      console.log(`Message is ${message}`);
      console.log(`Room is ${room}`);
      console.log(`Sender is ${sender}`);

      const data = {
        message,
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
    cb(`You joined ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('Socket has disconnected');
  })

});

module.exports = app;
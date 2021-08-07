require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

module.exports = app;
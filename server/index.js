require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

const userRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
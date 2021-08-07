const bcrypt = require('bcrypt');
const usersRouter = require('express').Router()
const User = require('../models/user');

/*
POST request for registering a user:

database will look to see if email or username is taken,
otherwise encrypts password and posts user to database
*/

usersRouter.post('/', async (request, response) => {
  const { body } = request;

  let user = await User.findOne({ email: body.email });

  if (user) {
    return response.status(401).json({
      error: 'email is taken',
    });
  }

  user = await User.findOne({ username: body.username });

  if (user) {
    return response.status(401).json({
      error: 'username is taken',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  user = new User({
    username: body.username,
    email: body.email,
    passwordHash
  });

  const savedUser = await user.save();

  return response.json(savedUser);
});

/*
usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate();
  response.json(users.map((user) => user.toJSON()));
});
*/

module.exports = usersRouter;
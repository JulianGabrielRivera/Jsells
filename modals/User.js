const mongoose = require('mongoose'); // this is what we are going to use to create a new modal

// const Schema = mongoose.Schema; // we store our schemas here // we use this to create our schemas
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

//create  user schema & model
// this is how our users will look
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true, // this error will be with an error code that we get in our terminal
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters long'],
  }, // if not passed in correctly 2nd argument will pass
});

//fire a function after doc saved to db // this is a mongoose hook it is a special function which fires after a certain mongoose event happens

// userSchema.post('save', function (doc, next) {});
// we can use pre to hash passwords before we save users to the database
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(); // this generates a salt for us and its async so we need to put await in front of it
  this.password = await bcrypt.hash(this.password, salt);
  next();
}); // for firing before we have to use function and not use arrow function cause then we dont get access to this, which is access to the user
const User = mongoose.model('user', userSchema); // creates a user model which represents collection in database // mongo pluralizes user for us

module.exports = User; // now we can use it in other files.

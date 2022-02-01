const mongoose = require('mongoose'); // this is what we are going to use to create a new modal

// const Schema = mongoose.Schema; // we store our schemas here // we use this to create our schemas

//create  user schema & model
// this is how our users will look
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // this error will be with an error code that we get in our terminal
});

module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose'); // this is what we are going to use to create a new modal
const Product = require('../modals/Products');
// const Schema = mongoose.Schema; // we store our schemas here // we use this to create our schemas

//create  user schema & model
// this is how our users will look
const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: { type: Number, default: 1 },

  // this error will be with an error code that we get in our terminal
});

module.exports = mongoose.model('Order', orderSchema);

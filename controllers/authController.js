const User = require('../modals/User');
const Product = require('../modals/Products');
const Order = require('../modals/Orders');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  //duplicate emails
  if (err.code === 11000) {
    errors.email = 'email is already taken';
    return errors;
  }
  //validation errors

  if (err.message.includes('user validation failed')) {
    // i think err is same as Err
    Object.values(err.errors).forEach(({ properties }) => {
      // this properties right here just destructures everything that is inside properties and we can access it
      errors[properties.path] = properties.message;
    });
  }
  return errors; // have to return the errors object that we have
};
module.exports.signup_get = (req, res) => {
  res.render('signup');
};
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body; // this is just destructuring and it gets the values from the req.body cause we added express.json()

  try {
    const user = await User.create({
      // creates an instnace of user locally for us and then saves it to the database this way.
      email,
      password,
    });

    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = (req, res) => {
  res.render('login');
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body; // this is just destructuring and it gets the values from the req.body cause we added express.json()
  console.log(email, password);
  res.send('user login');
};

module.exports.product_post = async (req, res) => {
  const { name, price } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
    });
    res.status(201).json({
      createdProduct: product,
      request: {
        type: 'POST',
        url: 'localhost:3000/products',
        data: { name: 'String', price: 'Number' },
      },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
module.exports.product_get = async (req, res) => {
  const id = req.params.productId;

  try {
    res.status(201).json({
      id: id,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.order_post = async (req, res) => {
  const { product, quantity } = req.body;

  try {
    const order = await Order.create({
      product,
      quantity,
    });
    res.status(201).json({
      createdOrder: order,
      request: {
        type: 'POST',
        url: 'localhost:3000/orders',
        data: { product: 'String', quantity: 'Number' },
      },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.product_delete = (req, res) => {};

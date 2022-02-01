// this is where we will create all our routes for our api
const express = require('express');
const User = require('../modals/User');
const { Router } = require('express');
const authController = require('../controllers/authController');
//set up express
const app = express(); // so app fires express / this creates it

const router = Router(); // this is our express router and we can mount our route handlers to this

router.get('/signup', authController.signup_get);

router.post('/s', authController.signup_post);

router.get('/login', authController.login_get);

router.post('/l', authController.login_post);

router.post('/product', authController.product_post);

router.get('/:productId', authController.product_get);

module.exports = router; // this is how we exports our routes then use them in the other file.

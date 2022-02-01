const express = require('express');
const mongoose = require('mongoose'); // we need this to connect to our mongoose server
const authRoutes = require('./routes/authRoutes'); // this is how we import our routes
const cookieParser = require('cookie-parser');
const cors = require('cors');

//set up express
const app = express(); // so app fires express / this creates it

//connect to mongodb
mongoose.connect(
  'mongodb+srv://misterj:5VKIcueJC0ySW3xS@jsells.bfsag.mongodb.net/Jsells'
);

mongoose.Promise = global.Promise;

app.use(express.static('public')); // we want this to be the first middleware in the parser and its so we can serve html,css,images to users if they request it
app.use(express.json()); // this is how we use parser and we can parse different types of bodys for us, and we accept .json data here. then it attaches it to the request object
app.use(cookieParser()); // now we can access cookie method on the response object
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(authRoutes); // this is how we will use our routes
//initiliaze routes

//lsiten for requests
// enviroment variable can provide us a port to access
app.listen(process.env.port || 4000); // listening for requests now

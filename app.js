const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();


// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
//changer URI with correct DB
const dbURI = 'mongodb+srv://mxdb:DUA9vvhMkkh6Ei9I@cluster0.aiirwpq.mongodb.net/node-auth';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.use(authRoutes);
app.use(pageRoutes);
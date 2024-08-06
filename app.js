const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
//changer URI with correct DB
const dbURI = 'mongodb+srv://mxdb:DUA9vvhMkkh6Ei9I@cluster0.aiirwpq.mongodb.net/jobtracker';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('login'));
app.use(authRoutes);
app.use(pageRoutes);


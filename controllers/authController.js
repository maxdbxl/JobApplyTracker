const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { firstName: "", lastName: "", email: "", password: "" };

    // Incorrect email
    if (err.message === 'incorrect email') {
        errors.email = "That email is not registered";
    }
    // Incorrect password
    if (err.message === 'incorrect password') {
        errors.password = "That password is incorrect";
    }

    // Duplicate error code
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }

    //Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// Create Token

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    //Put secret into separate file
    return jwt.sign({ id }, 'maxime dbxl secret', {
        expiresIn: maxAge
    });
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json({user: user._id});
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/login');
}

module.exports.register_get = (req, res) => {
    res.render('register');
}

module.exports.register_post = async (req, res) => {
    const { firstName, lastName, email, gitHub, profilePicture, cv, password } = req.body;

    try {
        const user = await User.create({ firstName, lastName, email, gitHub, profilePicture, cv, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.pwdupdate_get = (req, res) => {
    res.render('pwdupdate');
}

module.exports.pwdupdate_post = (req, res) => {
    res.send('new password');
}
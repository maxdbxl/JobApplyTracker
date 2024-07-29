module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = (req, res) => {
    res.send('user login');
}

module.exports.register_get = (req, res) => {
    res.render('register');
}

module.exports.register_post = (req, res) => {
    res.send('new signup');
}

module.exports.pwdupdate_get = (req, res) => {
    res.render('pwdupdate');
}

module.exports.pwdupdate_post = (req, res) => {
    res.send('new password');
}
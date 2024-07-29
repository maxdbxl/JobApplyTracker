module.exports.profile_get = (req, res) => {
    res.render('profile');
}
module.exports.dashboard_get = (req, res) => {
    console.log("dashboard loaded")
    res.render('dashboard');
}
module.exports.dashboard_post = (req, res) => {
    res.send('filter job display');
}
module.exports.job_get = (req, res) => {
    res.render('job');
}
module.exports.job_put = (req, res) => {
    res.send('update job');
}
module.exports.createjob_get = (req, res) => {
    res.render('createjob');
}
module.exports.createjob_post = (req, res) => {
    res.send('new job');
}
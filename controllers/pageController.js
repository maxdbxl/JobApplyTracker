const Job = require("../models/Job");

module.exports.profile_get = (req, res) => {

    res.render('profile');
}
module.exports.dashboard_get = async (req, res) => {
    try {
    const jobs = await Job.find({});
    console.log(jobs);
    res.render('dashboard', {jobs});    
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    
}
module.exports.dashboard_post = (req, res) => {
    res.send('filter job display');
}
module.exports.job_get = async (req, res) => {
    const id = '66b1dc7f7a4b582608c83fdd';
    const job = await Job.findById(id);
console.log(job, "test");
    res.status(200).render('job', { job });
}
module.exports.job_put = (req, res) => {
    res.send('update job');
}
module.exports.createjob_get = (req, res) => {
    res.render('createjob');
}
module.exports.createjob_post = async (req, res) => {
    const {title, website, employerName, employerEmail, phone, address, origin, status, comments} = req.body;

    try {
        const job = new Job({title, website, employerName, employerEmail, phone, address, origin, status, comments});
        await job.save();
        res.status(201).send('new job created:', { job });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
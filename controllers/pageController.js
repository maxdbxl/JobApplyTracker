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
    const { id } = req.params;
    const job = await Job.findById(id);
//console.log(job, "test");
    res.status(200).render('job', { job });
}
/* module.exports.job_put = async (req, res) => {
    const { id } = req.params;
    const {title, website, employerName, employerEmail, phone, address, origin, statusText, comments} = req.body;
    
    try {
        const job = await Job.findByIdAndUpdate(id, {title, website, employerName, employerEmail, phone, address, origin, statusText, comments}, {new: true});
        res.status(201).send(job);
    }catch (err) {
        console.error(err);res.status(500).send(err);
    }
}; */

module.exports.createjob_get = (req, res) => {
    res.render('createjob');
}
module.exports.createjob_post = async (req, res) => {
    const {title, website, employerName, employerEmail, phone, address, origin, statusText, comments} = req.body;

    try {
        const job = new Job({title, website, employerName, employerEmail, phone, address, origin, statusText, comments});
        await job.save();
        res.status(201).send({ job });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updatejob_get = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(200).render('updatejob', { job });
}

module.exports.updatejob_put = async (req, res) => {
    const { id } = req.params;
    const {title, website, employerName, employerEmail, phone, address, origin, statusText, comments} = req.body;
    
    try {
        const job = await Job.findByIdAndUpdate(id, {title, website, employerName, employerEmail, phone, address, origin, statusText, comments}, {new: true});
        res.status(201).send(job);
    }catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
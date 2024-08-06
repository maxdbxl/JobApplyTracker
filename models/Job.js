const mongoose = require('mongoose');
const { isEmail } = require('validator');

// Models

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a job title']
    },
    website: {
        type: String
    },
    employerName: {
        type: String,
        required: [true, 'Please enter the name of the employer']
    },
    employerEmail: {
        type: String,
        validate: [isEmail, 'Please enter a valid email']
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    origin: {
        type: String,
        //required: [true, 'Please choose the type of candidature']
    },
    status: {
        type: String,
        //required: [true, 'Please choose a status']
    },
    comments: {
        type: String
    }
});



const Job = mongoose.model('job', jobSchema);

module.exports = Job;
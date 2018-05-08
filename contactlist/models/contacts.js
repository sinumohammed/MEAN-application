const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    annualSalary:{
        type:Number,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Contact',ContactSchema);
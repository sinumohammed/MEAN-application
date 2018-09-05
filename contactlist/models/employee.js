const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    code:{
        type:String,
        required:true
    },
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
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Employee',EmployeeSchema);
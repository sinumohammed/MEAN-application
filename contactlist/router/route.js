const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// retrieving contacts
router.get('/employees', (req, res, next) => {
    console.log('reached');
    Employee.find(function (err, contacts) {
        console.log(err);
        res.json(contacts);
    })
});
// retrieving single contact by code
router.get('/employees/:code', (req, res, next) => {
    let query = { code: req.params.code };    
    Employee.findOne(query, function (err, contact){
        res.json(contact);
      });
});

// add contact
router.post('/employees', (req, res, next) => {
    let newEmployee = new Employee({       
        code:req.body.code,
        name: req.body.name,
        gender: req.body.gender,
        annualSalary: req.body.annualSalary,
        dateOfBirth:req.body.dateOfBirth
    });
    newEmployee.save((err, employee) => {
        if (err) {
            console.log(err);
            res.json({ msg: 'failed to add user.' });
        }
        else {
            res.json({ msg: 'contact added successfully' });
        }
    })
});

router.put('/employees/:id', (req, res, next) => {
    let query = { _id: req.params.id };
    Employee.findOne(query, function (err, employee){
        employee.name = req.body.name;
        employee.gender=req.body.gender;
        employee.annualSalary=req.body.annualSalary;
        employee.dateOfBirth=req.body.dateOfBirth;
        employee.save(function(err,result) {
            if(!err) {
                res.json(result);
            }
            else {
                res.json(err);
            }
        });
      });
});

router.delete('/employees/:id', (req, res, next) => {
    Eemployee.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

module.exports = router;
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

// dummy for test environment check
router.get('/employees/test', (req, res, next) => {
    console.log('reached');
    let contacts = [
        { "_id": "5b0a75d420499a000452c124", "code": "emp101", "name": "Tom-test", "gender": "Male", "annualSalary": 5500, "dateOfBirth": "6/25/1988", "__v": 0 },
        { "_id": "5b0a75f320499a000452c125", "code": "emp102", "name": "Alex-test", "gender": "Male", "annualSalary": 5700.95, "dateOfBirth": "9/6/1982", "__v": 0 },
        { "_id": "5b0a75fe20499a000452c126", "code": "emp103", "name": "Mike-test", "gender": "Male", "annualSalary": 5900, "dateOfBirth": "12/8/1979", "__v": 0 },
        { "_id": "5b0a760720499a000452c127", "code": "emp104", "name": "Mary-test", "gender": "Female", "annualSalary": 6500.826, "dateOfBirth": "10/14/1980", "__v": 0 },
        { "_id": "5b0a760d20499a000452c128", "code": "emp105", "name": "Nancy-test", "gender": "Female", "annualSalary": 6700.826, "dateOfBirth": "12/15/1982", "__v": 0 },
    ];
    res.json(contacts);
});
// dummy for stage environment check
router.get('/employees/stage', (req, res, next) => {
    console.log('reached');
    let contacts = [
        { "_id": "5b0a75d420499a000452c124", "code": "emp101", "name": "Tom-stage", "gender": "Male", "annualSalary": 5500, "dateOfBirth": "6/25/1988", "__v": 0 },
        { "_id": "5b0a75f320499a000452c125", "code": "emp102", "name": "Alex-stage", "gender": "Male", "annualSalary": 5700.95, "dateOfBirth": "9/6/1982", "__v": 0 },
        { "_id": "5b0a75fe20499a000452c126", "code": "emp103", "name": "Mike-stage", "gender": "Male", "annualSalary": 5900, "dateOfBirth": "12/8/1979", "__v": 0 },
        { "_id": "5b0a760720499a000452c127", "code": "emp104", "name": "Mary-stage", "gender": "Female", "annualSalary": 6500.826, "dateOfBirth": "10/14/1980", "__v": 0 },
        { "_id": "5b0a760d20499a000452c128", "code": "emp105", "name": "Nancy-stage", "gender": "Female", "annualSalary": 6700.826, "dateOfBirth": "12/15/1982", "__v": 0 },
    ];
    res.json(contacts);

});
// retrieving single contact by code
router.get('/employees/:code', (req, res, next) => {
    let query = { code: req.params.code };
    Employee.findOne(query, function (err, contact) {
        res.json(contact);
    });
});

// add contact
router.post('/employees', (req, res, next) => {
    let newEmployee = new Employee({
        code: req.body.code,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        gender: req.body.gender,
        annualSalary: req.body.annualSalary,
        dateOfBirth: req.body.dateOfBirth
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
// authenticate
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body
    let query = { email: email };
    const user = await Employee.findOne(query);
    if (!user) {
        return res.status(403).send({
            authenticated:false,
            error: 'The login information was incorrect'
        })
    }
    const isPasswordValid = user.password == password;
    if (!isPasswordValid) {
        return res.status(403).send({
            authenticated:false,
            error: 'The login information was incorrect'
        })
    }

    const userJson = user.toJSON()
    res.send({
        authenticated:true,
        user: user.name
    })
});
router.put('/employees/:id', (req, res, next) => {
    let query = { _id: req.params.id };
    Employee.findOne(query, function (err, employee) {
        employee.code = req.body.code;
        employee.email = req.body.email;
        employee.password = req.body.password;
        employee.name = req.body.name;
        employee.gender = req.body.gender;
        employee.annualSalary = req.body.annualSalary;
        employee.dateOfBirth = req.body.dateOfBirth;
        employee.save(function (err, result) {
            if (!err) {
                res.json(result);
            }
            else {
                res.json(err);
            }
        });
    });
});

router.delete('/employees/:id', (req, res, next) => {
    Employee.remove({
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
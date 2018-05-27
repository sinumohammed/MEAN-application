const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// retrieving contacts
router.get('/contacts', (req, res, next) => {
    console.log('reached');
    Contact.find(function (err, contacts) {
        console.log(err);
        res.json(contacts);
    })
});
// retrieving single contact by code
router.get('/contacts/:code', (req, res, next) => {
    let query = { code: req.params.code };    
    Contact.findOne(query, function (err, contact){
        res.json(contact);
      });
});

// add contact
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({       
        code:req.body.code,
        name: req.body.name,
        gender: req.body.gender,
        annualSalary: req.body.annualSalary,
        dateOfBirth:req.body.dateOfBirth
    });
    newContact.save((err, contact) => {
        if (err) {
            console.log(err);
            res.json({ msg: 'failed to add user.' });
        }
        else {
            res.json({ msg: 'contact added successfully' });
        }
    })
});

router.put('/contacts/:id', (req, res, next) => {
    let query = { _id: req.params.id };
    Contact.findOne(query, function (err, contact){
        contact.name = req.body.name;
        contact.gender=req.body.gender;
        contact.annualSalary=req.body.annualSalary;
        contact.dateOfBirth=req.body.dateOfBirth;
        contact.save(function(err,result) {
            if(!err) {
                res.json(result);
            }
            else {
                res.json(err);
            }
        });
      });
});

router.delete('/contacts/:id', (req, res, next) => {
    Contact.remove({
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
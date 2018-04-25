const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// retrieving contacts
router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});

// add contact
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        _id: req.body._id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if (err) {
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
        contact.first_name = req.body.first_name;
        contact.last_name=req.body.last_name;
        contact.phone=req.body.phone;
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
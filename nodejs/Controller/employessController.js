const express = require('express');

const Router = express.Router();

var {Employee} = require('../Models/employee');

// Get all employees
//locallhost:3000/employees
Router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.error('Error retrieving employees:', err);
            res.status(500).send(err);
        }
    });
});

module.exports = Router;
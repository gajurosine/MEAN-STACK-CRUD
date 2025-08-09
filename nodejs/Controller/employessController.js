const express = require('express');

const Router = express.Router();

var Employee = require('../Models/employee');

var objectId = require('mongoose').Types.ObjectId;  

// Get all employees
//locallhost:3000/employees
Router.get('/', (req, res) => {
    Employee.find()
        .then(employees => {
            res.json(employees);
        })
        .catch(err => {
            res.status(500).send('Error retrieving employees: ' + err.message);
        });
});


Router.get('/:id', (req, res) => {
    const employeeId = req.params.id;
    Employee.findById(employeeId)
        .then(employee => {
            if (!employee) {
                return res.status(404).send('Employee not found');
            }
            res.json(employee);
        })
        .catch(err => {
            res.status(500).send('Error retrieving employee: ' + err.message);
        });

    })

Router.post('/', (req, res) => {
    var emp = new Employee({
        FullName: req.body.FullName,
        Position: req.body.Position,
        Salary: req.body.Salary,
        Department: req.body.Department,
        Email: req.body.Email,
        Phone: req.body.Phone
    });
   emp.save()
        .then(employee => {
            res.status(201).json(employee);
        })
        .catch(err => {
            res.status(400).send('Error creating employee: ' + err.message);
        }); 
});

module.exports = Router;
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db'); // Import mongoose from db.js

const employeeController = require('./Controller/employessController'); // Import employee controller

// Create an Express application
//locallhost:3000/employees
const app = express();
app.use(bodyParser.json())

app.listen(3000,() =>{
    console.log('Server is running on port 3000')
})


app.use('/employees', employeeController); // Use the employee controller for /employees route  
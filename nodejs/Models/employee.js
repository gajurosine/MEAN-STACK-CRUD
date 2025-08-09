const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {

    FullName: {type :String},
    Position: {type: String},
    Salary: {type: Number},
    Department: {type: String},
    Email: {type: String},
    Phone: {type: Number},

}, 'Employees'); // 'Employees' is the collection name in MongoDB
module.exports = Employee;

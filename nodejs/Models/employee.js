const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {

    FullName: {type :String},
    Position: {type: String},
    Salary: {type: Number},
    Department: {type: String},
    Email: {type: String},
    Phone: {type: String},

},'emp');
module.exports = {Employee};

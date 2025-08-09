const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD/mydatabase')

.then(() => {
    console.log('database connected successfully.') 
})

.catch(err => {
    console.error('database connection error:', err);
});

module.exports = mongoose;
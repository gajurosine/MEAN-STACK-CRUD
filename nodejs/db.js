const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase',(err) =>{
    if(!err){
        console.log("mongodb connection successful")
    }else
    {
        console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2));
    }
});
module.export = mongoose
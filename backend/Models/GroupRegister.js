const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    leader:{
        type:String,
        required:true
    },
    member2:{
        type:String,
        required:true
    },
    member3:{
        type:String,
        required:true
    },
    member4:{
        type:String,
        required:true
    }
   
  
});

module.exports = mongoose.model('Group Register', GroupSchema)
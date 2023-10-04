const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quentity:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    }
  
});

module.exports = mongoose.model('Ticket Booking', TicketSchema)
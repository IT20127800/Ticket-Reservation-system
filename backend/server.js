const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();


const app = express();

//import route
const GroupRoutes = require('./Routes/GroupRegister');
const BookingRoutes = require('./Routes/TicketBooking');



//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(multer());


app.use(GroupRoutes);
app.use(BookingRoutes);



const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/Ticket-Reservation-System?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(process.env.PORT || PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


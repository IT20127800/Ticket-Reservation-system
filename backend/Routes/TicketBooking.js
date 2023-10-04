const express = require('express');
const Booking = require("../Models/TicketBooking");
const router = express.Router();


router.post("/save", (req, res) => {
    const Book = new  Booking({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        price: req.body.price,
        quentity: req.body.quentity,
        total: req.body.total  
    });

    Book
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});


//get book all
router.get('/getbooking', (req,res) =>{
    Booking.find().exec((err,Book)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Book
        });
    });
}); 


//update book
router.put('/bookingupdate/:id',(req,res)=>{
    Booking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});

//delete book
router.route("/deletebooking/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Booking.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


module.exports = router;
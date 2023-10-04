const TicketBooking = require("../Models/TicketBooking");

//add marks
const savebook = (req, res) => {
    const {
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    } = req.body;
  
    const book = new TicketBooking({
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    });
  
    book
      .save()
      .then((savebook) => {
        res.json(savebook);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };


  module.exports = {
    savebook
  };
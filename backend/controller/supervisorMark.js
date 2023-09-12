const SupervisorMarks = require("../Models/SupervisorMark");

//add marks
const addMarks = (req, res) => {
    const {
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    } = req.body;
  
    const supMarks = new SupervisorMarks({
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    });
  
    supMarks
      .save()
      .then((AddMarks) => {
        res.json(AddMarks);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };

  //Get the all of allocated marks
  const getMarks = async (req, res) => {
    try {
      const supermarks  = await SupervisorMarks .find();
      res.json(supermarks);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  //get a marks
  const getMark = async (req, res) => {
    const markId = req.params.id;
  
    try {
      const student = await SupervisorMarks.findById(markId);
      res.json(student);
    } catch (error) {
      res.status(400).json(error);
    }
  };



//update marks
  const updateMarks = async (req, res) => {
    const marksId = req.params.id;
  
    try {
      const sumarks = await SupervisorMarks.findById(marksId);
  
      if (!sumarks) {
        return res.status(404).json("There is no student to update");
      }
  
      const {
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
      } = req.body;
  
      const updatedMarks = await SupervisorMarks.findByIdAndUpdate(marksId, {
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
      });
  
      res.status(200).json(updatedMarks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

// remove marks
  const removeMarks = async (req, res) => {
    const  marksId= req.params.id;
  
    try {
      const sumarks = await  SupervisorMarks.findById( marksId);
  
      if (!sumarks) {
        return res.status(404).json("There is no user to remove");
      }
  
      const removedMarks = await SupervisorMarks.findByIdAndDelete(marksId);
      res.status(200).json( removedMarks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  



  module.exports = {
    addMarks,
    getMarks,
    updateMarks,
    getMark ,
    removeMarks,
    
  };
  
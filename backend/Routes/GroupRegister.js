const express = require('express');
const Group = require("../Models/GroupRegister");
const router = express.Router();



router.post("/register/save", (req, res) => {
    const group = new Group({
        name: req.body.name,
        leader: req.body.leader,
        member2: req.body.member2,
        member3: req.body.member3,
        member4: req.body.member4
       
    });

    group
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get 

router.get('/getgroups', (req,res) =>{
    Group.find().exec((err,Mark)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Mark
        });
    });
}); 

//get a specipic post
router.get("/marks/:id",(req,res) =>{
    let postId = req.params.id;

    Mark.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update post
router.put('/markupdate/:id',(req,res)=>{
    Mark.findByIdAndUpdate(
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


router.route("/deletegroup/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Group.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;
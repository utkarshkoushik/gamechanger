const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const chatmodel=require('../models/chatmodel');

router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newchat=new chatmodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        username1:req.body.username1,
        message : req.body.message
        
   });
   
        newchat.save();
        res.send("Account created").status(201);
          
    })
router.get('/',function(req,res){
    
        chatmodel.find()
        
        .exec()
        .then(product=>{
            res.json(product).status(200);
        })
    })


module.exports=router;
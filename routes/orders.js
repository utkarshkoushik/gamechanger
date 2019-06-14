const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const ordermodel=require('../models/ordermodel');


router.get('/',function(req,res){
    
    ordermodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})

router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const neworder=new ordermodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        username1 : req.body.username1,
        
   });
   
        neworder.save();
        res.send("Account created").status(201);
          
    })


module.exports=router;
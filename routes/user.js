const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const usermodel=require('../models/usermodel');

router.get('/',function(req,res){
    
    usermodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})


router.get('/:userID',function(req,res){
    console.log("yes")
    const id=req.params.userID;
    var query={username: `${id}`};
    console.log(query);
    usermodel.find(query)
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
    
})


router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newuser=new usermodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
        cpassword: req.body.cpassword,
        name:req.body.name,
        usertype: req.body.usertype,
        num:req.body.num,
        latitude : req.body.latitude,
        longitude : req.body.longitude
   });
   usermodel.find({username: req.body.username})
   .exec()
   .then(users=>{
       if(users.length>0){
           res.send("Account already exists").status(400);
           
           console.log("no")
       }
       else {
        newuser.save();
        res.send("Account created").status(201);
          }
        
       })
    })


module.exports=router;
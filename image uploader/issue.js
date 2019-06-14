const express=require('express');
const router = express.Router();
const bcryptjs=require('bcryptjs')
const mongoose=require('mongoose');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

//const jwt=require('jsonwebtoken');
const issueModel=require('../models/issueModel.js');


router.post('/', upload.single('issueImage'),function(req,res){
    console.log(req.file);
    console.log("ye wla post se pele hua")
    const newIssue=new issueModel({
        _id: new mongoose.Types.ObjectId(),
        issueId:req.body.issueId,
        issueDesc:req.body.issueDesc,
        issueLocation:req.body.issueLocation,
        issueStatus:req.body.issueStatus,
        issueImageUrl:req.file.path
        
    })
    
    newIssue.save()
    
    .then(res=>{
        
        console.log(res);
        console.log("issue reported succesfully")
    })
    
})

router.get("/",(req,res)=>{
    issueModel.find()
    .exec()
    .then(issue=>{
        res.json(issue).status(200);
        console.log("gya")
    })
})



module.exports=router;
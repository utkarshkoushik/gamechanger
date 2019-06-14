const mongoose = require('mongoose');

const issueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    issueId:{type: String, required: true},
    issueDesc:{type: String, required:true },
    issueLocation:{type: String, required: true},
    issueStatus:{type: Boolean, required: true, defaul: 0},
    issueImageUrl:{type: String}
   


})
module.exports=mongoose.model('issue',issueSchema);
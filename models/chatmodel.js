const mongoose=require('mongoose');
const chatSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    username1: {type: String, required:true},
    message : {type:String, required:true}
    


});

module.exports= mongoose.model('Chat',chatSchema);
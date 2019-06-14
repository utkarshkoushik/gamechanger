const mongoose=require('mongoose');
const orderSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    username1 : {type:String, required:true}
    

});

module.exports= mongoose.model('Order',orderSchema);
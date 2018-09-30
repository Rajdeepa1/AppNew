const mongoose=require('mongoose');

const user = new mongoose.Schema({
    name:{fName:String,lName:String},
    email:{type:String,default:'',unique: true},
    emailSend:{type:Boolean,default:false},
    emailConfirmation:{type:Boolean,default:false},
    uId:{type:String,default:'',required:true, unique: true},
    address:{type:String,default:'',required:true},
    phNo:{type:String,default:'',required:true,unique: true},
    otpSend:{type:Boolean,default:false},
    otpConfirmation:{type:Boolean,default:false},
    originDetail: [{place: String}]
})

module.exports = mongoose.model('users', user);
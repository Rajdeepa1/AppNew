import mongoose from mongoose;

const driver = new mongoose.Schema({
    dId: {type:String,default:'',required:true, unique: true},
    name: {type: String, defautl: ""},
    phNo: {type: String, default: ""},
    govtId : {
        idNo : {type: String, required: true, unique: true},
        idName: {type: String, required: true, unique: true},
    },
    licenseNo : {type: String, required: true, unique: true},
    email:{type:String,default:'',unique: true},
    emailSend:{type:Boolean,default:false},
    emailConfirmation:{type:Boolean,default:false},
    uId:{type:String,default:'',required:true, unique: true},
    address:{type:String,default:'',required:true},
    phNo:{type:String,default:'',required:true,unique: true},
    otpSend:{type:Boolean,default:false},
    otpConfirmation:{type:Boolean,default:false},
    feedback: {
        rating: Number,
        comment: String
    }
})

export default mongoose.model('drivers', driver);   
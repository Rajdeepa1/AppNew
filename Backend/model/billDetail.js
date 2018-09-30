import mongoose from mongoose;

const bill=new mongoose.Schema({
    bookId:{type:String},
    billId:{},
    cost:{waiting: Number,driving: String},
    date: Date.now,
    payStatus: {type}
})

export default mongoose.model('billDetail',bill);
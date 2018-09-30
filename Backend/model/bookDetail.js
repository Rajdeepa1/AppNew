import mongoose from mongoose;

const bookDet=new mongoose.Schema({
    uId:{type: String,requierd: true},
    dId:{type: String,requierd: true},
    bookId: {type: String, default: "", requierd: true, unique: true},
    origin:{type: String,requierd: true}, 
    destination:{type: String,requierd: true},
    carDetail:{model: String,company: String,
        plateName:{
            type: String,
            requierd: true,
            unique: true
        }
    },
    durationDetail: {from: Date,to:Date}
})

export default mongoose.model('bookDetails',bookDet);
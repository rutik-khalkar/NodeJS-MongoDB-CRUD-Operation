const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    
    _id:mongoose.Schema.Types.ObjectId, 
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    }, 
    rollNo : {
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Student',studentSchema)
const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    }, 
    age:{
        type:Number
    },
    rollno:{
        type:String
    },
    std:{
        type:String
    },
    
    createdAt: {
        type: Date, 
        default: Date.now()
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
})



const Student = mongoose.model('Student', studentSchema)

module.exports = Student
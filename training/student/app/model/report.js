const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reportSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: [true, 'select a student']
    },
    
    maths: {
        type: String,
        required: true
        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    }
   
})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report
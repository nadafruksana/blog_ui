const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema ({
    title:{
        type:String,
        minlength: [3,'title should more than 3 chars'],
        required:true
  },
  description:{
      type:String
  },
  completed:{
        type:Boolean,
        default:false
  },
  dueDate:{
      type:Date,
      //custom validations
      validate:{
          validator:function(value){
              return value >=new Date()
          },
          message: function(){
              return 'due Date cannot be less than today'
          }
      }
  },
  createdAt:{
      type:Date,
      default:Date.now

  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    //required:true
   

}
  
})


const Task = mongoose.model('Task',taskSchema)

module.exports = Task
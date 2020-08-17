const Student = require('../model/student')

module.exports.list = (req, res) => {
    Student.find({ user: req.user._id })
        .then(students => res.json(students))
}

module.exports.create = (req, res) => {
    const body = req.body 
    const student = new Student(body)
    student.user = req.user._id 
    student.save()
        .then(student => res.json(student))
        .catch(err => res.json(err))
}

// module.exports.show = (req, res) => {
//     const id = req.params.id 
//     Customer.findOne({ 
//         user: req.user._id, 
//         _id: id 
//     }).then(customer => {
//         if(!customer) {
//             res.json({})
//         } 
//         res.json(customer)
//     })
// }

// module.exports.update = (req, res) => {
//     const id = req.params.id 
//     const body = req.body 
//     Customer.findOneAndUpdate({ user: req.user._id, _id: id}, { $set: body}, { new: true, runValidators: true })
//         .then(customer => {
//             if(!customer) {
//                 res.json({})
//             }
//             res.json(customer) 
//         })
// }

// module.exports.destroy = (req, res) => {
//     const id = req.params.id 
//     Customer.findOneAndDelete({ user: req.user._id, _id: id})
//         .then(customer => {
//             if(!customer) {
//                 res.json({})
//             }
//             res.json(customer) 
//         })
// }
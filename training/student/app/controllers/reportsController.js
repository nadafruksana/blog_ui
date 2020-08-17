const Report = require('../model/report')

module.exports.list = (req, res) => {
    Report.find({ user: req.user._id })
        .then(reports => res.json(reports))
}

module.exports.create = (req, res) => {
    const body = req.body
    const report = new Report(body)
    report.user = req.user._id
    report.save()
        .then(ticket => res.json(report))
        .catch(err => res.json(err))
}

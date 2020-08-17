const express = require('express')
const router = express.Router()

const {authenticateUser} = require('../app/middlewares/authenticate')

const usersController = require('../app/controllers/usersController')
const studentsController = require('../app/controllers/studentsController')

const reportsController = require('../app/controllers/reportsController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', authenticateUser, usersController.account)
router.delete('/api/users/logout', authenticateUser, usersController.logout)
router.get('/api/users/showusers', usersController.showApi)

router.get('/api/students', authenticateUser, studentsController.list)
router.post('/api/students', authenticateUser, studentsController.create)

router.get('/api/reports', authenticateUser, reportsController.list)
router.post('/api/reports', authenticateUser, reportsController.create)

module.exports = router


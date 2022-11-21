const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/students', controller.GetAllStudents)

router.get('/:student_id', controller.GetStudent)

module.exports = router

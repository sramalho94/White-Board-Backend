const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/students', controller.GetAllStudents)

router.get('/:student_id', controller.GetStudent)

router.put('/addcourse/:student_id', controller.addCourseToStudent)

module.exports = router

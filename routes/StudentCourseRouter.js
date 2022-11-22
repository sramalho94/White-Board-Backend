const router = require('express').Router()
const controller = require('../controllers/StudentCourseController')

router.get('/allstudentcourses', controller.GetAllStudentCourses)

router.get('/:student_course', controller.GetStudentCourse)

router.post('/newstudentcourse', controller.createStudentCourse)

module.exports = router

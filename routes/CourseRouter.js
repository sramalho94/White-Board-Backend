const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.get('/courses', controller.GetAllCourses)

router.get('/courses/students', controller.GetAllCoursesWithStudents)

router.get('/:course_id', controller.GetCourse)

router.post('/create', controller.CreateCourse)

module.exports = router

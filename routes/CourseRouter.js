const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.get('/courses', controller.GetAllCourses)

router.get('/:course_id', controller.GetCourse)

router.post('/create/create', controller.CreateCourse)

module.exports = router

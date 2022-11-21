const router = require('express').Router()
const controller = require('../controllers/GradeController')

router.get('/grades', controller.GetAllGrades)

router.get('/:grade_id', controller.GetGrade)

router.post('/', controller.CreateGrade)

module.exports = router

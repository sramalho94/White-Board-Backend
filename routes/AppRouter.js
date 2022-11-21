const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const GradeRouter = require('./GradeRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/students', StudentRouter)
Router.use('/course', CourseRouter)
Router.use('/grades', GradeRouter)
Router.use('/auth', AuthRouter)

module.exports = Router

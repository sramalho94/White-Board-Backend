const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const AuthRouter = require('./AuthRouter')
const StudentCourseRouter = require('./StudentCourseRouter')

Router.use('/students', StudentRouter)
Router.use('/course', CourseRouter)
Router.use('/auth', AuthRouter)
Router.use('/studentcourse', StudentCourseRouter)

module.exports = Router

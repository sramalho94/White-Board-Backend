const Router = require('express').Router()
const CoureseRouter = require('./CourseRouter')
const GradeRouter = require('./GradeRouter')
const StudentRouter = require('./StudentRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/courses', CoureseRouter)
Router.use('/grades', GradeRouter)
Router.use('/students', StudentRouter)
Router.use('/auth', AuthRouter)

module.exports = Router

const { Student, Course } = require('../models')

const GetStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByPk()
    res.send(studentCourse)
  } catch (error) {
    throw error
  }
}

const GetAllStudentCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourse.findAll()
    res.send(studentCourses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudentCourse,
  GetAllStudentCourses
}

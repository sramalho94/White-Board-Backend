const { StudentCourse } = require('../models')

const GetStudentCourse = async (req, res) => {
  try {
    const { student_course } = req.params
    const studentCourse = await StudentCourse.findByPk(student_course)
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

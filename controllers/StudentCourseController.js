const { StudentCourses } = require('../models')

const GetStudentCourse = async (req, res) => {
  try {
    const { student_course } = req.params
    const studentCourse = await StudentCourses.findByPk(student_course)
    res.send(studentCourse)
  } catch (error) {
    throw error
  }
}

const GetAllStudentCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourses.findAll({})
    res.send(studentCourses)
  } catch (error) {
    throw error
  }
}
const createStudentCourse = async (req, res) => {
  try {
    const newStudentCourse = await StudentCourses.create(req.body)
    res.send(newStudentCourse)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetStudentCourse,
  GetAllStudentCourses,
  createStudentCourse
}

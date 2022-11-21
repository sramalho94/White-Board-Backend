const { Student } = require('../models')
const middleware = require('../middleware')

const GetStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const newStudent = await Student.create({ name, email, passwordDigest })
    res.send(newStudent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudent,
  GetAllStudents,
  CreateStudent
}

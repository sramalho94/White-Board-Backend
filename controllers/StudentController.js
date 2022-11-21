const { Student, StudentCourses } = require('../models')

const GetStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id, {
      include: [
        {
          model: StudentCourses,
          as: 'course'
        }
      ]
    })
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

module.exports = {
  GetStudent,
  GetAllStudents
}

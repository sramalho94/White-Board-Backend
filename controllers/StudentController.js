const { Student, Course } = require('../models')

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
    const students = await Student.findAll({
      include: [{ model: Course, as: 'courses' }]
    })
    res.send(students)
  } catch (error) {
    throw error
  }
}

const addCourseToStudent = async (req, res) => {
  try {
    const { student_id } = parseInt(req.params.student_id)
    const student = await Student.findByPk(student_id)
    await student.addCourses([req.body.courseId])
    await student.save()
    const response = await Student.findByPk(student_id, {
      include: [
        {
          model: Course,
          as: 'courses'
        }
      ]
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudent,
  GetAllStudents,
  addCourseToStudent
}

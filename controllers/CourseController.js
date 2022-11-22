const { Course, Student } = require('../models')

const GetCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.course_id, {
      include: [
        {
          model: Student,
          as: 'students'
        }
      ]
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body)
    res.send(newCourse)
  } catch (error) {
    throw error
  }
}

const GetAllCoursesWithStudents = async (req, res) => {
  try {
    const studentCourses = await Course.findAll({
      include: [
        {
          model: Student,
          as: 'students'
        }
      ]
    })
    res.send(studentCourses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCourse,
  GetAllCourses,
  CreateCourse,
  GetAllCoursesWithStudents
}

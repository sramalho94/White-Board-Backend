const { Grade } = require('../models')

const GetGrade = async (req, res) => {
  try {
    const grade = await Grade.findByPk(req.params.grade_id)
    res.send(grade)
  } catch (error) {
    throw error
  }
}

const GetAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll()
    res.send(grades)
  } catch (error) {
    throw error
  }
}

const CreateGrade = async (req, res) => {
  try {
    const newGrade = await Grade.create(req.body)
    res.send(newGrade)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGrade,
  GetAllGrades,
  CreateGrade
}

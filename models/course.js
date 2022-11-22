'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.Student, {
        foreignKey: 'studentId',
        as: 'students',
        through: models.StudentCourses
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}

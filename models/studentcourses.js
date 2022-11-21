'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentCourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // StudentCourses.belongsTo(models.Grade, {
      //   foreignKey: 'gradeId',
      //   as: 'grade'
      // })
      // StudentCourses.belongsTo(models.Student, {
      //   foreignKey: 'studentId',
      //   as: 'student'
      // })
    }
  }
  StudentCourses.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      grade: DataTypes.INTEGER,
      allowNull: false
    },
    {
      sequelize,
      modelName: 'StudentCourses',
      tableName: 'student_courses'
    }
  )
  return StudentCourses
}

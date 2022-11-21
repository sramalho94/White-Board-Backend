'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'student_courses',
      [
        {
          studentId: 1,
          courseId: 1,
          grade: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 2,
          courseId: 2,
          grade: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 3,
          courseId: 3,
          grade: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('student_courses', null, {})
  }
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'Computer Science',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'English',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mathematics',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('courses', null, {})
  }
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'grades',
      [
        {
          score: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          score: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          score: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('grades', null, {})
  }
}

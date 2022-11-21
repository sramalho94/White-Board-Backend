'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Billy',
          email: 'billy@school.edu',
          passwordDigest:
            '$2b$12$oOU22OmJq1q22MKS/0It2OeR31HVu.bisUXc6TIO3SAk/m8y.BCb.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sammy',
          email: 'sammy@school.edu',
          passwordDigest:
            '$2b$12$oOU22OmJq1q22MKS/0It2OeR31HVu.bisUXc6TIO3SAk/m8y.BCb.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Carlos',
          email: 'carlos@school.edu',
          passwordDigest:
            '$2b$12$oOU22OmJq1q22MKS/0It2OeR31HVu.bisUXc6TIO3SAk/m8y.BCb.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('students', null, {})
  }
}

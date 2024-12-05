'use strict';

const quizSessions = [{
  id: 'f5e8b2b9-4d1a-4d6d-8b4f-3f4e6c8b0c3d',
  quiz_id: '0a5fd78a-7792-4fae-b608-98dd28421fff',
  created_at: new Date(),
  updated_at: new Date(),
},
{
  id: 'f5e8b2b9-4d1a-4d6d-8b4f-3f4e6c8b0c3e',
  quiz_id: '0a5fd78a-7792-4fae-b608-98dd28421ffe',
  created_at: new Date(),
  updated_at: new Date(),
},
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
      await queryInterface.bulkInsert('quiz_sessions', quizSessions, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('quiz_sessions', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quiz_session_participants', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      quiz_session_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'quiz_sessions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });

    // Add unique constraint for (quiz_session_id, user_id)
    await queryInterface.addConstraint('quiz_session_participants', {
      fields: ['quiz_session_id', 'user_id'],
      type: 'unique',
      name: 'unique_quiz_session_user',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quiz_session_participants');
  },
};

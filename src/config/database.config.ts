import { Sequelize } from 'sequelize-typescript';
import { QuizSessionModel } from '../models/quiz-sessions.model';
import { QuizSessionParticipantModel } from '../models/quiz-session-participant.model';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  models: [QuizSessionModel, QuizSessionParticipantModel],
  logging: false,
});

export default sequelize;
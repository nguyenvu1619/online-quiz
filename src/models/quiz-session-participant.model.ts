import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Default,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
import { QuizSessionParticipant } from '../domains/entities/quiz-session-participants.entity';
import { QuizSessionModel } from './quiz-sessions.model';
  
  @Table({ tableName: 'quiz_session_participants', timestamps: true })
  export class QuizSessionParticipantModel extends Model<QuizSessionParticipant> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: string;
    
    @ForeignKey(() => QuizSessionModel)
    @Column({
      type:DataType.UUID,
      field: 'quiz_session_id'
    })
    quizSessionId: string;
  
    @Column({
      type:DataType.UUID,
      field: 'user_id'
    })
    userId!: string;
    
    @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at', 
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: 'updated_at',
  })
  updatedAt: Date;
  }
  
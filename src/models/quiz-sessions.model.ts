import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    HasMany,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  import { QuizSessionParticipantModel } from './quiz-session-participant.model';
import { QuizSession } from '../domains/entities/quiz-session.entity';
  
  @Table({ tableName: 'quiz_sessions', timestamps: true })
  export class QuizSessionModel extends Model<QuizSession> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;
    
    @Column({
      type:DataType.UUID,
      field: 'quiz_id'
    })
    quizId: string;

    @HasMany(() => QuizSessionParticipantModel)
    participants!: QuizSessionParticipantModel[];

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
  
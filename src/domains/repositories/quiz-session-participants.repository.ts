import { QuizSessionParticipant } from "../entities/quiz-session-participants.entity";

export interface QuizSessionParticipantRepository {
    addParticipant(
      quizSessionId: string,
      userId: string
    ): Promise<QuizSessionParticipant>;
  
    getParticipantsBySessionId(
      quizSessionId: string
    ): Promise<QuizSessionParticipant[]>;
  
    getParticipantById(participantId: string): Promise<QuizSessionParticipant | null>;
  
    removeParticipant(participantId: string): Promise<void>;

    getParticipant(sessionId: string, userId: string): Promise<QuizSessionParticipant | null>;
}
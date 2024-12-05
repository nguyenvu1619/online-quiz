import { QuizSessionParticipant } from "../entities/quiz-session-participants.entity";
import { QuizSession } from "../entities/quiz-session.entity";

export interface QuizSessionRepository {
    createSession(): Promise<QuizSession>;
    getSessionById(sessionId: string): Promise<QuizSession | null>;
    addParticipant(
      sessionId: string,
      userId: string
    ): Promise<QuizSessionParticipant>;
    getParticipants(sessionId: string): Promise<QuizSessionParticipant[]>;
  }
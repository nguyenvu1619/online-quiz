import { QuizSession } from '../domains/entities/quiz-session.entity';
import { QuizSessionModel } from '../models/quiz-sessions.model';

export class QuizSessionRepositoryImpl {
  /**
   * Create a new quiz session
   */
  async createSession(): Promise<QuizSession> {
    return await QuizSessionModel.create();
  }

  /**
   * Get a quiz session by its ID
   */
  async getSessionById(sessionId: string): Promise<QuizSession | null> {
    return await QuizSessionModel.findByPk(sessionId);
  }

  /**
   * Get all quiz sessions
   */
  async getAllSessions(): Promise<QuizSession[]> {
    return await QuizSessionModel.findAll();
  }

  /**
   * Delete a quiz session by its ID
   */
  async deleteSession(sessionId: string): Promise<void> {
    const session = await QuizSessionModel.findByPk(sessionId);
    if (session) {
      await session.destroy();
    }
  }
}

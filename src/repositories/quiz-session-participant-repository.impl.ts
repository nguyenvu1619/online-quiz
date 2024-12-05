import { QuizSessionParticipant } from "../domains/entities/quiz-session-participants.entity";
import { QuizSessionParticipantRepository } from "../domains/repositories/quiz-session-participants.repository";
import { QuizSessionParticipantModel } from "../models/quiz-session-participant.model";

export class QuizSessionParticipantRepositoryImpl implements QuizSessionParticipantRepository {
  /**
   * Add a new participant to a quiz session
   */
  async addParticipant(
    quizSessionId: string,
    userId: string
  ): Promise<QuizSessionParticipant> {
    return await QuizSessionParticipantModel.create({
      quizSessionId,
      userId,
    });
  }

  /**
   * Get all participants for a specific quiz session
   */
  async getParticipantsBySessionId(
    quizSessionId: string
  ): Promise<QuizSessionParticipant[]> {
    return await QuizSessionParticipantModel.findAll({
      where: { quizSessionId },
    });
  }

  /**
   * Get a single participant by their ID
   */
  async getParticipantById(participantId: string): Promise<QuizSessionParticipant | null> {
    return await QuizSessionParticipantModel.findByPk(participantId);
  }

  /**
   * Get a single participant by their ID
   */
  async getParticipant(sessionId: string, userId: string): Promise<QuizSessionParticipant | null> {
    return await QuizSessionParticipantModel.findOne({
      where: { quizSessionId: sessionId, userId },
    });
  }

  /**
   * Remove a participant from a quiz session
   */
  async removeParticipant(participantId: string): Promise<void> {
    const participant = await QuizSessionParticipantModel.findByPk(participantId);
    if (participant) {
      await participant.destroy();
    }
  }
}

import { createError, ErrorCodeNames } from "../common/error-codes";
import { logger } from "../common/log";
import { QuizSessionParticipant } from "../domains/entities/quiz-session-participants.entity";
import { QuizSessionParticipantRepositoryImpl } from "../repositories/quiz-session-participant-repository.impl";
import { QuizSessionRepositoryImpl } from "../repositories/quiz-session-repository.impl"


const quizSessionRepository = new QuizSessionRepositoryImpl();
const quizSessionParticipantRepository = new QuizSessionParticipantRepositoryImpl();
const quizSessionService = {
    joinSession: async (quizSessionId: string, userId: string): Promise<QuizSessionParticipant> => {
        
        const session = await quizSessionRepository.getSessionById(quizSessionId);
        if (!session) {
            logger.warn(`Quiz session not found: ${quizSessionId}`);
            throw ErrorCodeNames.QUIZ_SESSION_NOT_FOUND
        }
        const existingParticipant = await quizSessionParticipantRepository.getParticipant(quizSessionId, userId);
        if (existingParticipant) {
            logger.warn(`User already joined quiz session: ${userId}`);
            throw ErrorCodeNames.USER_JOINED_QUIZ
        }
        try {
        const newParticipant = await quizSessionParticipantRepository.addParticipant(quizSessionId, userId);
        return newParticipant;
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError') {
                logger.warn(`User already joined quiz session: ${userId}. Constraint error`);
                throw ErrorCodeNames.USER_JOINED_QUIZ
            }
            logger.error('Error joining quiz session', error);
            throw ErrorCodeNames.INTERNAL_SERVER_ERROR
        }

    }
}

export default quizSessionService;

import { NextFunction, Response } from 'express';
import quizSessionService from '../../services/quiz-session.service';
import { AuthRequest } from '../../common/types';
import { createError, ErrorCodeNames } from '../../common/error-codes';
import { logger } from '../../common/log';

const quizSessionController = {
    joinQuizSession: async (req: AuthRequest, res: Response, next: NextFunction) => {
        try{
        const { sessionId } = req.params;
        if(!sessionId) {
            throw createError(ErrorCodeNames.SESSION_ID_REQUIRED);
        }
        const { id: userId } = req.user;
        const participant = await quizSessionService.joinSession(sessionId, userId);
        res.status(201).json(participant);
        } catch (error) {
            console.log(error);
            logger.error('Error joining quiz session', error);
            next(error);
        }
    }
}

export default quizSessionController;
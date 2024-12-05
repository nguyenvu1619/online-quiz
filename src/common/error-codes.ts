import { StatusCodes } from 'http-status-codes'

export class AppError extends Error {
    statusCode: number;
  
    constructor(statusCode: number, message: string) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
}

export enum ErrorCodeNames {
    NOT_FOUND = 'NOT_FOUND',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    UNAUTHORIZED = 'UNAUTHORIZED',
    BAD_REQUEST = 'BAD_REQUEST',
    FORBIDDEN = 'FORBIDDEN',
    QUIZ_SESSION_NOT_FOUND = 'QUIZ_SESSION_NOT_FOUND',
    USER_JOINED_QUIZ = 'USER_JOINED_QUIZ',
    SESSION_ID_REQUIRED = 'SESSION_ID_REQUIRED',
}

export const ErrorCodes = {
    NOT_FOUND: {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Not Found',
    },
    INTERNAL_SERVER_ERROR: {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
    },
    UNAUTHORIZED: {
        statusCode: StatusCodes.UNAUTHORIZED,
        message: 'Unauthorized',
    },
    BAD_REQUEST: {
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Bad Request',
    },
    FORBIDDEN: {
        statusCode: StatusCodes.FORBIDDEN,
        message: 'Forbidden',
    },
    QUIZ_SESSION_NOT_FOUND: {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Quiz session not found',
    },
    USER_JOINED_QUIZ: {
        statusCode: StatusCodes.CONFLICT,
        message: 'User already joined the quiz',
    },
    SESSION_ID_REQUIRED: {
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Session ID is required',
    },
}

export const createError = (errorCode: ErrorCodeNames): AppError => {
    return new AppError(ErrorCodes[errorCode].statusCode, ErrorCodes[errorCode].message);
}
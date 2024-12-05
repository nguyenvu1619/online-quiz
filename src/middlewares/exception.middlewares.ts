import { NextFunction, Request, Response } from 'express';
import { AppError, createError, ErrorCodeNames } from '../common/error-codes';
import { logger } from '../common/log';

const ErrorHandler = (err: AppError | ErrorCodeNames, _req: Request, res: Response, _next: NextFunction) => {
    const appError = typeof err === 'string' && err in ErrorCodeNames ? createError(err as ErrorCodeNames) : err as AppError;
    if(!appError.statusCode) {
        logger.error('Unhandled error', appError);
    }
    const errStatus = appError.statusCode || 500;
    const errMsg = appError.message || 'Internal Server Error';
    res.status(errStatus).json({
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? appError.stack : {}
    });
};

export default ErrorHandler;

import { Request, Response, NextFunction } from 'express';
import { BaseApiError } from '../exeptions/ApiErrors';

const errorHandler = (
    error: BaseApiError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.httpCode 
        ? error.httpCode 
        : 500;
    
    res.status(statusCode).json({
        msg: error.message,
        stack: error.stack
    });
};

export default errorHandler;
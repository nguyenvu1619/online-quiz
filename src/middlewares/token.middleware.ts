import { NextFunction, Response } from "express";
import { AuthRequest } from "../common/types";
import jwt from "jsonwebtoken";
import { logger } from "../common/log";
import { createError, ErrorCodeNames } from "../common/error-codes";
import { User } from "../domains/entities/user.entity";

export const decodeToken = (req: AuthRequest, _res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;
  
      if (!authHeader) {
        logger.error("Authorization header is missing");
        throw createError(ErrorCodeNames.INTERNAL_SERVER_ERROR);
      }
  
      const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
      if (!token) {
        logger.error("Token is missing");
        throw createError(ErrorCodeNames.INTERNAL_SERVER_ERROR);
      }
  
      try {
        // Decode token and attach user to request object
        // Token is verified in the api gateway
        const decoded = jwt.decode(token) as User;
        req.user = decoded; 
        next();
      } catch (error) {
        logger.error("Error decoding token", error);
        throw createError(ErrorCodeNames.INTERNAL_SERVER_ERROR);
      }
  };
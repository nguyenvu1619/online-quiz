import { Request } from "express";
import { User } from "../domains/entities/user.entity";

export interface AuthRequest extends Request {
    user: User;
}
import { QuizSessionParticipant } from "./quiz-session-participants.entity";

export interface QuizSession {
    id: string;
    quizId: string;
    participants?: QuizSessionParticipant[];
}
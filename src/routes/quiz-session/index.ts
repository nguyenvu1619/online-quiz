import express from "express";
import quizSessionController from "./quiz-session.controller";

const router = express.Router();

router.post("/:sessionId/join", quizSessionController.joinQuizSession);

export default router;
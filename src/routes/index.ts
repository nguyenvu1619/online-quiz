import express from "express";
import quizSessionRoutes from "./quiz-session";

const router = express.Router();

router.use("/quiz-session", quizSessionRoutes);

export default router;
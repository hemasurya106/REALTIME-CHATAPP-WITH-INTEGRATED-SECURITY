import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // /api/auth/signup
router.post("/login", login);   // /api/auth/login
router.post("/logout", logout); // /api/auth/logout

export default router;

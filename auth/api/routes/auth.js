import express from "express"
import { signup, login } from "../controller/auth.js";
import { signupValidation, LoginValidation } from "../middleware/AuthValidation.js"

const router = express.Router()


router.post('/login',LoginValidation, login);
router.post('/signup',signupValidation, signup);

export default router

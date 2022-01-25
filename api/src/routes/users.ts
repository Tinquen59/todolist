import express from "express";
const router = express.Router();

import { loginController, signupController } from "../controllers/account";

router.post("/login", loginController);
router.post("/signup", signupController);

export default router;

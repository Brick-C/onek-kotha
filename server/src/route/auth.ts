import express from "express";
import { login } from "../controllers/authController";

const router = express.Router();

//create route
router.post("/login", login);

export default router;

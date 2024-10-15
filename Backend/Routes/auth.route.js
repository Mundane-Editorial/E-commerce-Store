import express from 'express';
import { login, logout, signup } from '../Controllers/auth.controller.js';

const router = express.Router();


//signup auth route
router.get("/signup", signup);


//login auth route
router.get("/login", login);


//logout auth route
router.get("/logout", logout);

export default router;
import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register); // Keep this to create the first admin

export const AuthRoutes = router;

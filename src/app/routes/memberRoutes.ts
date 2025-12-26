import express from 'express';
import { getAllMembers } from '../controllers/memberController.js';

const router = express.Router();

router.get('/', getAllMembers);

export const MemberRoutes = router;

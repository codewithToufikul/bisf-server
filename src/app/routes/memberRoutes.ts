import express from 'express';
import { getAllMembers, getAllMembersForAdmin, updateMember, softDeleteMember } from '../controllers/memberController.js';

const router = express.Router();

router.get('/', getAllMembers);
router.get('/admin', getAllMembersForAdmin);
router.patch('/:id', updateMember);
router.delete('/:id', softDeleteMember);

export const MemberRoutes = router;

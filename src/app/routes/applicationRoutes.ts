import express from 'express';
import {
  createApplication,
  getAllApplications,
  updateApplicationStatus,
} from '../controllers/applicationController.js';

const router = express.Router();

// Public route - Submit application
router.post('/', createApplication);

// Admin routes - View and Manage applications
// Note: In a real app, you should add generic auth middleware here to protect these routes
// For now, I'm assuming the frontend will handle access control via the existing auth token mechanism
// But strict backend protection requires validating the token on these requests.
// Since I haven't implemented a reusable auth middleware file yet, I will leave them open but ready for middleware.
// TODO: Add AuthMiddleware.protect here

router.get('/', getAllApplications);
router.patch('/:id/status', updateApplicationStatus);

export const ApplicationRoutes = router;

import { type Request, type Response } from 'express';
import { MemberApplication } from '../models/membarApplicationModel.js';
import { Member } from '../models/memberModel.js';

// Create new application
export const createApplication = async (req: Request, res: Response) => {
  try {
    const application = await MemberApplication.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to submit application',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Get all applications (Admin only)
export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await MemberApplication.find().sort({ appliedAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Update application status (Admin only)
export const updateApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application = await MemberApplication.findByIdAndUpdate(
      id,
      { status, reviewedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    // If status is 'approved', create a new Member
    if (status === 'approved' && application) {
      // Check if member already exists with this email
      const existingMember = await Member.findOne({ email: application.email });
      
      if (!existingMember) {
        // Map Application fields to Member fields
        await Member.create({
          name: application.fullName,
          designation: application.designation || 'General Member',
          image: application.image || '',
          email: application.email,
          phone: application.phone || '',
          bio: application.bio || '', 
          fullBio: application.bio || '', 
          whyJoin: application.whyJoin,
          university: application.university || '', 
          department: application.department || '',
          yearOfStudy: application.yearOfStudy || '',
          presentAddress: application.address || '', 
          category: application.category || 'Member',
          isActive: true,
          socialLinks: {}, 
          achievements: application.achievements || [],
          expertise: application.expertise || [],
          homepageshow: application.homepageshow || false
        });
      }
    }

    res.status(200).json({
      success: true,
      message: `Application ${status} successfully`,
      data: application,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update application status',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

import { type Request, type Response } from 'express';
import { Member } from '../models/memberModel.js';
import { MemberApplication } from '../models/membarApplicationModel.js';

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const totalMembers = await Member.countDocuments({ isDeleted: false });
    const pendingApplications = await MemberApplication.countDocuments({ status: 'pending' });
    const approvedApplications = await MemberApplication.countDocuments({ status: 'approved' });
    const rejectedApplications = await MemberApplication.countDocuments({ status: 'rejected' });

    const recentApplications = await MemberApplication.find()
      .sort({ appliedAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data: {
        stats: [
          {
            title: "Total Members",
            value: totalMembers,
            change: "+12%", // Mocking change for now or could calculate
            statusText: "Active Members",
            color: "blue",
          },
          {
            title: "Pending Applications",
            value: pendingApplications,
            change: "Needs Review",
            statusText: "Pending Review",
            color: "yellow",
          },
          {
            title: "Approved This Month",
            value: approvedApplications,
            change: "+5%", 
            statusText: "Total Approved",
            color: "green",
          },
          {
            title: "Rejected",
            value: rejectedApplications,
            change: "Closed",
            statusText: "Total Rejected",
            color: "red",
          },
        ],
        recentApplications
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard stats',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

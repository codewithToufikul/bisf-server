import { type Request, type Response } from 'express';
import { Member } from '../models/memberModel.js';

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const members = await Member.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch members',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

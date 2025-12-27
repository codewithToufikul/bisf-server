import { type Request, type Response } from 'express';
import { Member } from '../models/memberModel.js';

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const members = await Member.find({ isActive: true, isDeleted: { $ne: true } }).sort({ order: 1, createdAt: 1 });
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

export const getAllMembersForAdmin = async (req: Request, res: Response) => {
  try {
    const members = await Member.find({ isDeleted: { $ne: true } }).sort({ order: 1, createdAt: 1 });
    res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch members for admin',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const member = await Member.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Member not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Member updated successfully',
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update member',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const softDeleteMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const member = await Member.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Member not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Member deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete member',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

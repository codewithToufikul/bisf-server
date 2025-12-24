import { Document, Types } from "mongoose";

export type ApplicationStatus = "pending" | "approved" | "rejected";

export interface IApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  institution?: string;
  studentId?: string;
  department?: string;
  yearOfStudy?: string;
  address?: string;
  whyJoin: string;
  status: ApplicationStatus;
  appliedAt: Date;
  reviewedAt?: Date;
  reviewedBy?: Types.ObjectId;
}

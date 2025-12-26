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
  image?: string;
  designation?: string;
  bio?: string;
  category?: string;
  whyJoin: string;
  achievements?: string[];
  expertise?: string[];
  status: ApplicationStatus;
  appliedAt: Date;
  reviewedAt?: Date;
  reviewedBy?: Types.ObjectId;
}

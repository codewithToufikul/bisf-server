import { Document } from "mongoose";

export interface ISocialLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface IMember extends Document {
  name: string;
  designation: string;
  photo?: string; // Cloudinary URL
  email?: string;
  phone?: string;
  bio?: string;
  education?: string;
  achievements?: string[];
  socialLinks?: ISocialLinks;
  order?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

import { Document } from "mongoose";

export interface ISocialLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface IMember extends Document {
  name: string;
  designation: string;
  image?: string; // ImgBB URL
  email: string;
  phone?: string;
  bio?: string;
  fullBio?: string;
  education?: string;
  university?: string;
  department?: string;
  session?: string;
  passingYear?: string;
  achievements?: string[];
  expertise?: string[];
  socialLinks?: ISocialLinks;
  category?: string;
  yearOfStudy?: string;
  gender?: string;
  bloodGroup?: string;
  presentAddress?: string;
  permanentAddress?: string;
  whyJoin?: string;
  order?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

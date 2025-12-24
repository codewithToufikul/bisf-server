import mongoose, { Schema } from "mongoose";
import type { IMember } from "../interfaces/member.js";

const MemberSchemea = new Schema<IMember>({
  name: {String, required: true},
  designation: {String, required: true},
  photo: String,
  email: String,
  phone: String,
  bio: String,
  education: String,
  achievements: [String],
  socialLinks: {
    linkedin: String,
    facebook: String,
    twitter: String,
  },
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const Member = mongoose.model<IMember>('Member', MemberSchemea)
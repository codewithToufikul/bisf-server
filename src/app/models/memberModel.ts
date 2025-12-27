import mongoose, { Schema } from "mongoose";
import type { IMember } from "../interfaces/member.js";

const MemberSchema = new Schema<IMember>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    default: "General Member"
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
  },
  bio: {
    type: String,
  },
  fullBio: {
    type: String,
  },
  education: {
    type: String,
  },
  university: {
    type: String,
  },
  department: {
    type: String,
  },
  session: {
    type: String,
  },
  passingYear: {
    type: String,
  },
  achievements: [String],
  expertise: [String],
  socialLinks: {
      linkedin: String,
      facebook: String,
      twitter: String
  },
  category: {
    type: String,
    default: "Member" // "Executive Committee", "Department Heads", "Advisory Board", "Member"
  },
  yearOfStudy: String,
  gender: String,
  bloodGroup: String,
  presentAddress: String,
  permanentAddress: String,
  whyJoin: String,
  
  order: {
      type: Number,
      default: 0
  },
  isActive: {
      type: Boolean,
      default: true
  },
  homepageshow: {
      type: Boolean,
      default: false
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
}, {
  timestamps: true
});

export const Member = mongoose.model<IMember>('Member', MemberSchema);
import mongoose, { Schema, Types } from "mongoose";
import type { IApplication } from "../interfaces/memberApplication.js";

const MemberApplicationSchema = new Schema<IApplication>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    institution: {
      type: String,
      trim: true,
    },
    studentId: {
      type: String,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    yearOfStudy: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
    },
    whyJoin: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    reviewedAt: {
      type: Date,
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const MemberApplication = mongoose.model<IApplication>(
  "MemberApplication",
  MemberApplicationSchema
);

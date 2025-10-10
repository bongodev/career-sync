import { model, Schema } from 'mongoose';
import type { Job } from '@/schemas';
import { EmploymentType, WorkPlaceType, JobStatus } from '@/types/index';

const JobSchema = new Schema<Job>(
  {
    title: { type: String, required: true, unique: true },
    jobDescription: { type: String, required: true },
    openingDate: { type: Date, required: true },
    applicationDeadline: { type: Date, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    employmentType: { type: String, enum: EmploymentType, required: true },
    workPlaceType: { type: String, enum: WorkPlaceType, required: true },
    compensation: { type: String, required: true },
    skills: [{ type: String }],
    vacancy: { type: Number, required: true },
    tags: [{ type: String }],
    status: { type: String, enum: JobStatus, default: 'draft' },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true, virtuals: true },
);

export const JobModel = model('Job', JobSchema);

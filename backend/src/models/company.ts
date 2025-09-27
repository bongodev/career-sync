import { model, Schema } from 'mongoose';

import type { Company } from '@/schemas';

const companySchema = new Schema<Company>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logo: { type: String, required: false },
    website: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

export const CompanyModel = model<Company>('Company', companySchema);

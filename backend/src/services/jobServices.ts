import { JobModel } from '@/models';
import type { CreateJob } from '@/schemas';

export const createJob = async (jobPayload: CreateJob) => {
  const newJob = await JobModel.create(jobPayload);
  return newJob;
};

export const getJob = async (companyId: string, jobId: string) => {
  const job = await JobModel.findOne({
    company: companyId,
    _id: jobId,
  }).populate('company');

  return job;
};

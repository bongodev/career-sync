import { JobModel } from '@/models';
import type { CreateJob, Job } from '@/schemas';
import { PaginatedResponse } from '@/types';

export const createJob = async (jobPayload: CreateJob) => {
  const newJob = await JobModel.create(jobPayload);
  return newJob;
};

export const getAllJobs = async (
  id: string,
  { page = 0, limit = 10 }: { page: number; limit: number },
): Promise<PaginatedResponse<Job>> => {
  const [jobs, total] = await Promise.all([
    JobModel.find({ company: id, deletedAt: null })
      .populate('company')
      .skip(page * limit)
      .limit(limit)
      .lean()
      .exec(),
    JobModel.countDocuments({
      company: id,
      deletedAt: null,
    }).exec(),
  ]);

  return {
    items: jobs,
    total,
    page,
    limit,
  };
};

export const getJob = async (companyId: string, jobId: string) => {
  const job = await JobModel.findOne({
    company: companyId,
    _id: jobId,
  }).populate('company');

  return job;
};

export const updateJob = async (id: string, newJobData: CreateJob) => {
  const updateJobData = await JobModel.findByIdAndUpdate(id, newJobData, {
    new: true,
  });

  return updateJobData;
};

export const deleteJob = async (companyId: string, jobId: string) => {
  const findJob = await JobModel.findOne({ company: companyId, _id: jobId });

  if (!findJob || findJob?.deletedAt) {
    return false;
  }

  // @ts-expect-error: softDelete is added by the Mongoose plugin, not in the type definition
  await findJob.softDelete();

  return true;
};

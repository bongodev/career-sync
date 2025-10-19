import type { Request, Response } from 'express';
import { jobServices } from '@/services';

export const createJob = async (req: Request, res: Response) => {
  const newJob = await jobServices.createJob(req.body);
  res.status(201).json(newJob.toJSON());
};

export const getAllJobs = async (req: Request, res: Response) => {
  const { companyId } = req.params;
  const page = parseInt(req.query.page || '0');
  const limit = parseInt(req.query.limit || '10');
  const allJobs = await jobServices.getAllJobs(companyId, { page, limit });

  res.status(200).json({
    data: allJobs,
    status: 'success',
  });
};

export const getJob = async (req: Request, res: Response) => {
  const { companyId, jobId } = req.params;
  const job = await jobServices.getJob(companyId, jobId);

  if (job?.deletedAt != null) {
    res.status(404).json({ message: 'No job found', status: 'failed' });
    return;
  }

  res.status(200).json({ data: job, status: 'success' });
};

export const updateJob = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  const updatedJobData = req.body;

  // Do not allow users to update company reference
  // OR company ID
  if (updatedJobData?.company) {
    res
      .status(403)
      .json({ message: 'Cannot update company reference', status: 'fail' });
    return;
  }

  const updatedJob = await jobServices.updateJob(jobId, updatedJobData);

  if (!updatedJob) {
    res
      .status(404)
      .json({ message: 'No company found with this id', status: 'failed' });
    return;
  }

  res.status(201).json({ data: updatedJob, status: 'success' });
};

export const deleteJob = async (req: Request, res: Response) => {
  const { companyId, jobId } = req.params;
  const deleteJob = await jobServices.deleteJob(companyId, jobId);

  if (!deleteJob) {
    res
      .status(404)
      .json({ message: 'No job found with this id', status: 'fail' });
    return;
  }

  res.status(200).json({
    message: 'Job deletion successful',
    status: 'success',
  });
};

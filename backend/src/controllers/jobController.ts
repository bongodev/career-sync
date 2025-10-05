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

import type { Request, Response } from 'express';
import { jobServices } from '@/services';

export const createJob = async (req: Request, res: Response) => {
  const newJob = await jobServices.createJob(req.body);
  res.status(201).json(newJob.toJSON());
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

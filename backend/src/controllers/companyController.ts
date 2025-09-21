import { companyServices } from '@/services';
import type { Request, Response } from 'express';

export const createCompany = async (req: Request, res: Response) => {
  const newCompany = await companyServices.createCompany(req.body);
  res.status(201).json(newCompany.toJSON());
};

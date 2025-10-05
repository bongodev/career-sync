import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validatePayload = (schema: ZodType) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const payload = req.body;
    schema.parse(payload);
    next();
  };
};

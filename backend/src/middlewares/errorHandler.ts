import { NextFunction, Request, Response } from 'express';
import mongoose, { mongo } from 'mongoose';
import z from 'zod';

import logger from '@/configs/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  // Zod
  if (error instanceof z.ZodError) {
    res.status(400).json({
      status: 'error',
      message: JSON.parse(error.message) || 'Validation Error',
    });
    return;
  }

  // Mongoose
  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      status: 'error',
      message: error.message || 'Validation Error',
    });
    return;
  }

  // Mongoose cast error (invalid ObjectId, etc.)
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({
      status: 'error',
      message: `Invalid ${error.path}: ${error.value}`,
    });
    return;
  }

  // Mongoose duplicate key error (E11000)
  if (error instanceof mongo.MongoServerError && error.code === 11000) {
    res.status(400).json({
      status: 'error',
      message: `Duplicate value for field(s): ${Object.keys(error.keyValue).join(', ')}`,
      duplicateField: error.keyValue,
    });
    return;
  }

  logger.error(
    error,
    `Unhandled error occurred in request ${req.method} ${req.url}`,
  );

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

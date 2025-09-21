import { z } from 'zod';

export const IdMixinSchema = z.object({
  _id: z.string(),
});

export const DateMixinSchema = z.object({
  createdAt: z.union([z.date(), z.string()]).optional(),
  updatedAt: z.union([z.date(), z.string()]).optional(),
});

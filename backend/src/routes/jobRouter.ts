import { Router } from 'express';
import { jobController } from '@/controllers';
import { validatePayload } from '@/middlewares/validatePayload';
import { CreateJobSchema } from '@/schemas';

const router = Router();

router.post(
  '/:companyId/jobs',
  validatePayload(CreateJobSchema),
  jobController.createJob,
);
router.get('/:companyId/jobs/:jobId', jobController.getJob);

export default router;

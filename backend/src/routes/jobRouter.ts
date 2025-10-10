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
router.get('/:companyId/jobs', jobController.getAllJobs);
router.get('/:companyId/jobs/:jobId', jobController.getJob);
router.delete('/:companyId/jobs/:jobId', jobController.deleteJob);

export default router;

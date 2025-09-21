import { Router } from 'express';
import { companyController } from '@/controllers';

const router = Router();

router.post('/', companyController.createCompany);

export default router;

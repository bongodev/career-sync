import { Router } from 'express';
import { companyController } from '@/controllers';

const router = Router();

router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);

export default router;

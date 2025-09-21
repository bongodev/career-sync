import type { Express } from 'express';

import companyRouter from './companyRouter';

export default function configureRoutes(app: Express) {
  app.use('/api/v1/companies', companyRouter);
}

import { CreateCompany } from '@/schemas';
import { CompanyModel } from '@/models';

export const createCompany = async (companyPayload: CreateCompany) => {
  const newCompany = await CompanyModel.create(companyPayload);
  return newCompany;
};

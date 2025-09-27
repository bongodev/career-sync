import { CompanyModel } from '@/models';
import type { Company, CreateCompany } from '@/schemas';
import type { PaginatedResponse } from '@/types';

export const createCompany = async (companyPayload: CreateCompany) => {
  const newCompany = await CompanyModel.create(companyPayload);
  return newCompany;
};

export const getCompanies = async ({
  page = 0,
  limit = 10,
}: {
  page: number;
  limit: number;
}): Promise<PaginatedResponse<Company>> => {
  const [companies, total] = await Promise.all([
    CompanyModel.find()
      .skip(page * limit)
      .limit(limit)
      .lean()
      .exec(),
    CompanyModel.countDocuments().exec(),
  ]);

  return {
    items: companies,
    total,
    page,
    limit,
  };
};

export const getCompanyByID = async (_id: string) => {
  const company = await CompanyModel.find({ _id });
  return company;
};

export const updateCompanyByID = async (id: string, newData: CreateCompany) => {
  const createUpdatedCompany = await CompanyModel.findByIdAndUpdate(
    id,
    newData,
    {
      new: true,
    },
  );

  return createUpdatedCompany;
};

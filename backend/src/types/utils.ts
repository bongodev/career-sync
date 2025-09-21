export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};

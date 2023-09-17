import axios from 'axios';
import queryString from 'query-string';
import { CreditLimitInterface, CreditLimitGetQueryInterface } from 'interfaces/credit-limit';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCreditLimits = async (
  query?: CreditLimitGetQueryInterface,
): Promise<PaginatedInterface<CreditLimitInterface>> => {
  const response = await axios.get('/api/credit-limits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCreditLimit = async (creditLimit: CreditLimitInterface) => {
  const response = await axios.post('/api/credit-limits', creditLimit);
  return response.data;
};

export const updateCreditLimitById = async (id: string, creditLimit: CreditLimitInterface) => {
  const response = await axios.put(`/api/credit-limits/${id}`, creditLimit);
  return response.data;
};

export const getCreditLimitById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/credit-limits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCreditLimitById = async (id: string) => {
  const response = await axios.delete(`/api/credit-limits/${id}`);
  return response.data;
};

import axios from 'axios';
import queryString from 'query-string';
import { DataFilterInterface, DataFilterGetQueryInterface } from 'interfaces/data-filter';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDataFilters = async (
  query?: DataFilterGetQueryInterface,
): Promise<PaginatedInterface<DataFilterInterface>> => {
  const response = await axios.get('/api/data-filters', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataFilter = async (dataFilter: DataFilterInterface) => {
  const response = await axios.post('/api/data-filters', dataFilter);
  return response.data;
};

export const updateDataFilterById = async (id: string, dataFilter: DataFilterInterface) => {
  const response = await axios.put(`/api/data-filters/${id}`, dataFilter);
  return response.data;
};

export const getDataFilterById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-filters/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataFilterById = async (id: string) => {
  const response = await axios.delete(`/api/data-filters/${id}`);
  return response.data;
};

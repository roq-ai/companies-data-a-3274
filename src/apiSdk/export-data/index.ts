import axios from 'axios';
import queryString from 'query-string';
import { ExportDataInterface, ExportDataGetQueryInterface } from 'interfaces/export-data';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExportData = async (
  query?: ExportDataGetQueryInterface,
): Promise<PaginatedInterface<ExportDataInterface>> => {
  const response = await axios.get('/api/export-data', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExportData = async (exportData: ExportDataInterface) => {
  const response = await axios.post('/api/export-data', exportData);
  return response.data;
};

export const updateExportDataById = async (id: string, exportData: ExportDataInterface) => {
  const response = await axios.put(`/api/export-data/${id}`, exportData);
  return response.data;
};

export const getExportDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/export-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExportDataById = async (id: string) => {
  const response = await axios.delete(`/api/export-data/${id}`);
  return response.data;
};

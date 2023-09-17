import axios from 'axios';
import queryString from 'query-string';
import { GraphicInterface, GraphicGetQueryInterface } from 'interfaces/graphic';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGraphics = async (query?: GraphicGetQueryInterface): Promise<PaginatedInterface<GraphicInterface>> => {
  const response = await axios.get('/api/graphics', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGraphic = async (graphic: GraphicInterface) => {
  const response = await axios.post('/api/graphics', graphic);
  return response.data;
};

export const updateGraphicById = async (id: string, graphic: GraphicInterface) => {
  const response = await axios.put(`/api/graphics/${id}`, graphic);
  return response.data;
};

export const getGraphicById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/graphics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGraphicById = async (id: string) => {
  const response = await axios.delete(`/api/graphics/${id}`);
  return response.data;
};

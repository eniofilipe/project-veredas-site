import api from './Api';
import { Categoria, PostCategoriaProps, PutCategoriaProps } from '../types';

export const getCategorias = async () => api.get<Categoria[]>('/categoria');

export const postCategoria = async (data: PostCategoriaProps) =>
  api.post('/categoria', data);

export const putCategoria = async (data: PutCategoriaProps) =>
  api.put('/categoria', data);

export default { getCategorias, postCategoria, putCategoria };

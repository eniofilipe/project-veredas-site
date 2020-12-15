import api from './Api';
import { PostClienteProps, Cliente } from '../types';

export const postClientes = async (data: PostClienteProps) => api.post('/cliente', data);

export const getDetails = async (id: number) =>
  api.get<Cliente>(`/cliente/id/${id}`);

export default { postClientes };

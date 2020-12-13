import api from './Api';
import { PostClienteProps } from '../types';

export const postClientes = async (data: PostClienteProps) =>
  api.post('/cliente', data);

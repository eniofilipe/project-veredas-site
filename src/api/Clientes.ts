/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
import api from './Api';
import { PostClienteProps, PutClienteProps, Cliente } from '../types';

export const postClientes = async (data: PostClienteProps) =>
  api.post('/cliente', data);

export const getDetails = async (id: number) =>
  api.get<Cliente>(`/cliente/id/${id}`);

export const updateProfile = async (data: PutClienteProps) =>
  api.put('/cliente', data);

export default { postClientes };

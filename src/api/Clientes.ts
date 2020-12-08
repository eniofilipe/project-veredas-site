import api from './Api';
import { PostClienteProps } from '../types';

export const postClientes = async () => api.post('/cliente');

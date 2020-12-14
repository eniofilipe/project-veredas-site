import api from './Api';
import { Login, LoginResponse } from '../types';

export const getLogin = async (data: Login) =>
  api.post<LoginResponse>('/sessao', data);

export default { getLogin };

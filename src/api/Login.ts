/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-unresolved */
import api from './Api';
import { Login, LoginResponse } from '../types';

export const getLogin = async (data: Login) =>
  api.post<LoginResponse>('/sessao', data);

export default { getLogin };

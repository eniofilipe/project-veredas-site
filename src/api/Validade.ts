/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import api, { apiWithoutAuthorization } from './Api';
import { Validade, GetStatusLojaProps, ResponseValidaToken } from '../types';

export const getValidade = async () => api.get<Validade[]>('/validade-oferta');

export const getOpened = async () =>
  api.get<GetStatusLojaProps>('/status-loja');


export const getValidaToken = async (token: string) =>
  api.post<ResponseValidaToken>('/valida-token', { token });

export const getOpenedWithoutToken = async () =>
  apiWithoutAuthorization.get<GetStatusLojaProps>('/status-loja');

export const getValidaTokenWithoutToken = async (token: string) =>
  apiWithoutAuthorization.post<ResponseValidaToken>('/valida-token', {
    data: { token },
  });


export default { getValidade };

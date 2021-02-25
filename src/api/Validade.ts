/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import api from './Api';
import { Validade, GetStatusLojaProps } from '../types';

export const getValidade = async () => api.get<Validade[]>('/validade-oferta');

export const getOpened = async () =>
  api.get<GetStatusLojaProps>('/status-loja');

export default { getValidade };

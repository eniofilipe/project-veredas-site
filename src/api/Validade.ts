import api from './Api';
import { Validade } from '../types';

export const getValidade = async () => api.get<Validade[]>('/validade-oferta');

export default { getValidade };

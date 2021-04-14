import api from './Api';
import { Produto, PostProdutoProps, ResponseProduto } from '../types';

export const getProduto = async () => api.get<ResponseProduto>('/produto');

export const postProduto = async (data: PostProdutoProps) =>
  api.post('/produto', data);

export default { postProduto, getProduto };

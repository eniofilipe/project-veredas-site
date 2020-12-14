import api from './Api';
import { PostPedidoProps } from '../types';

export const postPedido = async (data: PostPedidoProps) =>
  api.post('/pedido', data);

export default { postPedido };

import api from './Api';
import { PostPedidoProps, PedidosProps } from '../types';

export const postPedido = async (data: PostPedidoProps) =>
  api.post('/pedido', data);

export const getPedidos = async () => api.get<PedidosProps[]>('/pedido');

export default { getPedidos, postPedido };

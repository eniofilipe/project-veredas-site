import api from './Api';
import { PostPedidoProps, PedidosProps, Pagamento } from '../types';

export const postPedido = async (data: PostPedidoProps) =>
  api.post('/pedido', data);

export const getPedidos = async () =>
  api.get<PedidosProps[]>('/pedido', {
  params: {
    pagina: '1',
    limite: '2147483640',
  },
});

export const getPagamento = async () => api.get<Pagamento[]>('/tipo-pagamento');

export default { getPedidos, postPedido };

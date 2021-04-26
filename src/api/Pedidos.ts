import api from './Api';
import { PostPedidoProps, PedidosProps, Pagamento, Frete} from '../types';

export const postPedido = async (data: PostPedidoProps) =>
  api.post('/pedido', data);

export const getPedidos = async () =>
  api.get<PedidosProps[]>('/pedido', {
  params: {
    pagina: '1',
    limite: '2147483640',
    // limite: '10',
  },
});

export const getPagamento = async () => api.get<Pagamento[]>('/tipo-pagamento');

export const deletePedido = async (id: number) => api.delete<PedidosProps[]>(`/pedido/${id}`);

export const getFrete = async () => api.get<Frete[]>(`/frete`);

export default { getPedidos, postPedido };

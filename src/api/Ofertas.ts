import api from './Api'
import { Oferta, Validade } from '../types'

export const getProdutosOfertas = async () =>
  api.get<Oferta[]>('/oferta', {
    params: {
      disponibilidade: 'ativa'
    }
  })

export const getOfertas = async () => api.get<Validade[]>('/validade-oferta')

export default {
  getProdutosOfertas,
  getOfertas
}

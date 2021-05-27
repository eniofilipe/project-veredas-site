import api from './Api'
import { Imagem } from '../types'

export const sendImage = async (data: FormData) =>
  api.post<Imagem>('/imagens', data)

export default { sendImage }

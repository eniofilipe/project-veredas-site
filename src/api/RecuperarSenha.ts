/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
import api from './Api'
import { PostRecuperarSenhaProps } from '../types'

export const postRecuperarSenha = async (data: PostRecuperarSenhaProps) =>
  api.post('/forget', data)
export default { postRecuperarSenha }

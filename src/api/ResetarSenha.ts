/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
import api from './Api';
import { PostResetarSenhaProps } from '../types';

export const postResetarSenha = async (data: PostResetarSenhaProps) =>
  api.post('/reset', data);
export default { postResetarSenha };

/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable-next-line indent */

import { format } from 'date-fns';

export const cpfMask = (value: string) =>
  value
  .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

export const cepMask = (value: string) =>
  value
  .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  .replace(/(\d{5})(\d)/, '$1-$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  .replace(/(-\d{3})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

export const cnpjMask = (value: string) =>
  value
  .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1/$2')
  .replace(/(\d{4})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

export const dateMask = (value: string) => value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');

export const maskState = (value: string) =>
  value.replace(/\d+/g, '').toUpperCase();

export const cellphoneeMask = (value: string) =>
  value
  .replace(/\D/g, '')
  .replace(/(\d{0})(\d)/, '$1($2')
  .replace(/(\d{2})(\d)/, '$1) $2')
  .replace(/(\d{5})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{4})\d+?$/, '$1');

export const cpfCnpjMask = (v: string) => {
  v = v.replace(/\D/g, '');

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2');
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
    v = v.replace(/(\d{4})(\d)/, '$1-$2');
  }

  return v;
};

export const FormatDateByFNS = (v: string) => format(new Date(v), 'dd/MM/yyyy');

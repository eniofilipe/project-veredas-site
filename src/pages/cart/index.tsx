/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/no-unresolved
import React, { useContext, useState, useEffect } from 'react';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CartContext from '../../contexts/cart';

type Product = {
  product: string;
  quantity: number;
  value: number;
};

type Address = {
  street: string;
  number: string;
  neighborhood: string;
  cep: string;
  complement?: string;
};

export type CartProps = {
  address: Address;
  frete: number;
  tipoPagamento: string[];
};

const endereco: Address = {
  cep: '39404-154',
  neighborhood: 'Jardim Primavera',
  street: 'Rua trinta e dois',
  number: '122B',
  complement: 'Perto do bar',
};

const product1: Product = {
  product: 'Alface',
  quantity: 3,
  value: 2.5,
};

const product2: Product = {
  product: 'Rucula',
  quantity: 3,
  value: 5.5,
};

const Cart = ({
  address = endereco,
  frete = 5,
  tipoPagamento = ['Dinheiro'],
}: CartProps) => {
  const { products } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const resultAux = products.map(
      (prod) => prod.quantidadeCart * prod.valor_unitario
    );

    const result = resultAux.reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0,
    );

    setSubtotal(result);

    setTotal(result + 5);
  }, [products]);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Logo src={veredaslogo} alt="" />
        <S.Title> Minha Cesta </S.Title>
      </S.WrapperHeader>

      <S.WrapperContent>
        <S.Label>Pedido</S.Label>
        <S.Items>
          {products.map((offer) => (
            <S.WrapperItem>
              <S.WrapperControl>
                <S.SumButton />
                <S.Text>{offer.quantidadeCart}</S.Text>
                <S.SubButton />
                <S.Text>{offer.produtos.nome}</S.Text>
              </S.WrapperControl>
              <S.Value>
                R${offer.valor_unitario * offer.quantidadeCart}{' '}
              </S.Value>
            </S.WrapperItem>
          ))}
        </S.Items>

        <S.SubTotal>{`Subtotal R$ ${subtotal}`}</S.SubTotal>

        <S.WrapperDelivery>
          <S.Label>Endereço</S.Label>
          <S.Address>
            {address && (
              <S.Text>
                {address.cep} - {address.neighborhood} - {address.street} -{' '}
                {address.number} - {address.complement}
              </S.Text>
            )}

            <S.Value>R${frete}</S.Value>
          </S.Address>
        </S.WrapperDelivery>
        <S.SubTotal>{`Total R$ ${total}`}</S.SubTotal>

        <S.WrapperSelect>
          <S.Label>Tipo de Pagamento</S.Label>
          {tipoPagamento && (
            <S.Select>
              {tipoPagamento.map((tipo, i) => (
                <option key={i}>{tipo}</option>
              ))}
            </S.Select>
          )}
        </S.WrapperSelect>
      </S.WrapperContent>

      <S.WrapperButtons>
        <S.CancelButton>Cancelar</S.CancelButton>
        <S.AcceptButton>Finalizar</S.AcceptButton>
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default Cart;

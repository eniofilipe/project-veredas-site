/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/no-unresolved
import {
  useContext, useState, useEffect, useLayoutEffect,
} from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { GetServerSideProps } from 'next';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CartContext from '../../contexts/cart';
import AuthContext from '../../contexts/auth';
import { OfertaPedido, Address, CartProps } from '../../types';
import { cepMask } from '../../Utils/Masks';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';
import { postPedido } from '../../api/Pedidos';
import ValidadeContext from '../../contexts/validade';
import {
  getOpenedWithoutToken,
  getValidaTokenWithoutToken,
} from '../../api/Validade';

const Cart = ({ frete = 5, tipoPagamento = ['Dinheiro'] }: CartProps) => {
  const Router = useRouter();
  const { signOut } = useContext(AuthContext);
  const { products } = useContext(CartContext);
  const { validade } = useContext(ValidadeContext);
  const { getCliente, getAddress } = useContext(AuthContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const [endereco, setAddress] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [renderizando, setRenderizando] = useState<number>();

  useEffect(() => {
    const resultAux = products.map(
      (prod) => prod.quantidadeCart * prod.valor_unitario,
    );

    const result = resultAux.reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0,
    );

    setSubtotal(result);

    setTotal(result + 5);
  }, [products]);

  const aumentarQuantidade = (index: number) => {
    products[index].quantidadeCart += 1;
    console.log(products[index].quantidadeCart);
    setRenderizando(products[index].quantidadeCart);
  };

  useEffect(() => {
    setAddress(getAddress());
    setCliente(getCliente());
  }, [renderizando]);

  async function handlePedido() {
    try {
      await postPedido({
        ofertas: products.map(
          (c) => ({ oferta_id: c.id, quantidade: c.quantidadeCart } as OfertaPedido),
        ),
        cliente_id: cliente.id,
        tipo_frete_id: 1,
        tipo_pagamento_id: 1,
        valor_frete: 5,
      });
      toast.success('Pedido realizado com sucesso!');
      setTimeout(() => Router.push('/orders'), 1000);
    } catch (err) {
      toast.error('Erro ao realizar pedido!');

      console.log(err);
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={veredaslogo} alt="" />
        <S.WrapperMenu>
          <S.Title onClick={() => Router.push('profile')}>Perfil</S.Title>
          <S.Title onClick={signOut}>Sair</S.Title>
        </S.WrapperMenu>
      </S.Header>

      <S.WrapperContent>
        <S.H1>Carrinho</S.H1>
        <S.Items>
          {products.map((offer, index) => (
            <S.WrapperItem>
              <S.WrapperControl>
                <S.SubButton />
                <S.Text>{offer.quantidadeCart}</S.Text>
                <S.SumButton onClick={() => aumentarQuantidade(index)}/>
                <S.WrapperProd>
                  <S.Text>{offer.produtos.nome}</S.Text>
                  {/* <S.Text>{offer.produtos.descricao}</S.Text> */}
                  <S.Text>R$ {offer.valor_unitario}</S.Text>
                </S.WrapperProd>
              </S.WrapperControl>
              <S.Value>
                R$ {(offer.valor_unitario * offer.quantidadeCart).toFixed(2)}{' '}
              </S.Value>
            </S.WrapperItem>
          ))}
          <S.WrapperSubtotal>
            <S.Row>
              <S.SubTotal>Subtotal</S.SubTotal>
              <S.SubTotal>{`R$ ${subtotal.toFixed(2)}`}</S.SubTotal>
            </S.Row>
            <S.Row>
              <S.SubTotal>Taxa de Entrega</S.SubTotal>
              <S.SubTotal>R${frete.toFixed(2)}</S.SubTotal>
            </S.Row>
            <S.Line />
            <S.Row>
              <S.SubTotal>Total </S.SubTotal>
              <S.SubTotal>R$ {(subtotal + frete).toFixed(2)}</S.SubTotal>
            </S.Row>
          </S.WrapperSubtotal>
        </S.Items>

        <S.WrapperItem>
          <S.Label>Endereço</S.Label>
          <S.Address>
            {endereco && (
              <S.Text>
                {endereco?.cep.toString().replace(/(\d{5})(\d)/, '$1-$2')};{' '}
                {endereco.street}, {endereco.number}, {endereco.neighborhood}{' '}
                <br /> {endereco.complement}
              </S.Text>
            )}
          </S.Address>
        </S.WrapperItem>

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
        <S.CancelButton onClick={() => router.back()}>Cancelar</S.CancelButton>
        <S.AcceptButton onClick={() => handlePedido()}>
          CONFIRMAR PEDIDO
        </S.AcceptButton>
      </S.WrapperButtons>

      <S.WrapperFooter>
        <div>
          <p>Cooperativa Camponesa - Veredas da Terra</p>
          <p>CNPJ: 10.286.881/0001-02</p>
          <p>Entregas realizadas somente na cidade de Montes Claros/MG.</p>
        </div>
        <div>
          <p>Contato</p>
          <p>contato@veredasdaterra.com.br</p>
          <p>(38) 9 9900-0000</p>
        </div>
        <div>
          <S.Logo
            src={veredaslogo}
            alt="Logo da cooperativa Veredas da Terra"
          />
          <S.Logo src={logomst} alt="Logo do MST" />
          <S.Logo src={logoif} alt="Logo do IFNMG" />
        </div>
      </S.WrapperFooter>
    </S.Wrapper>
  );
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  let validade = false;

  try {
    const response = await getOpenedWithoutToken();
    if (response.data.success === 'aberta') validade = true;
  } catch (error) {
    console.log(error);
  }

  if (!validade) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

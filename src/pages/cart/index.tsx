/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */
import {
  useContext, useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { GetServerSideProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import * as S from '../../styles/cart/styles';
import CartContext from '../../contexts/cart';
import AuthContext from '../../contexts/auth';
import Footer from '../../components/Footer';
import {
  OfertaPedido, Pagamento, 
} from '../../types';
import { postPedido, getPagamento, getFrete } from '../../api/Pedidos';
import {
  getOpenedWithoutToken,
} from '../../api/Validade';

const Cart = () => {
  const Router = useRouter();
  const { signOut } = useContext(AuthContext);
  const { products, removeProduct, clearCart } = useContext(CartContext);
  const { getCliente, getAddress } = useContext(AuthContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const [endereco, setAddress] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [tipoPagamento, setTipoPagamento] = useState<Pagamento[]>([]);
  const [pagamento, setPagamento] = useState<number>(1);
  const [controle, setControle] = useState(1);
  const [freteFixo, setFreteFixo] = useState<number>(0);
  const [idFixo, setIdFixo] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const pegarPagamento = async () => {
    try {
      const response = await getPagamento();

      setTipoPagamento(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const pegarFrete = async () => {
    try {
      const response = await getFrete();

      setFreteFixo(response.data[0].valor_frete);
      setIdFixo(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const resultAux = products.map(
      (prod) => prod.quantidadeCart * prod.valor_unitario,
    );

    const result = resultAux.reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0,
    );

    setSubtotal(result);

    setTotal(result + freteFixo);
  }, [products, freteFixo]);

  const aumentarQuantidade = (index: number, maxQuantity: number) => {
    if (products[index].quantidadeCart + 1 > maxQuantity) {
      return;
    }
    products[index].quantidadeCart += 1;
    // setRenderizando(products[index].quantidadeCart);

    const resultAux = products.map(
      (prod) => prod.quantidadeCart * prod.valor_unitario,
    );

    const result = resultAux.reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0,
    );

    setSubtotal(result);

    setTotal(result + freteFixo);
  };

  const diminuirQuantidade = (index: number) => {
    if (products[index].quantidadeCart === 1) {
      removeProduct(products[index]);
    } else {
      products[index].quantidadeCart -= 1;

      const resultAux = products.map(
        (prod) => prod.quantidadeCart * prod.valor_unitario,
      );

      const result = resultAux.reduce(
        (prev, curr) => Number(prev) + Number(curr),
        0,
      );

      setSubtotal(result);

      setTotal(result + freteFixo);
    }
    // setRenderizando(products[index].quantidadeCart);
  };

  async function handlePedido() {
    setControle(controle + 1);
    if (controle > 1) {
      return;
    }
    try {
      await postPedido({
        ofertas: products.map(
          (c) => ({ oferta_id: c.id, quantidade: c.quantidadeCart } as OfertaPedido),
        ),
        cliente_id: cliente.id,
        tipo_frete_id: idFixo,
        tipo_pagamento_id: pagamento,
        valor_frete: freteFixo,
      });
      // {console.log(cliente.id, idFixo, pagamento, freteFixo);}
      toast.success('Pedido realizado com sucesso!', { position: 'bottom-right', autoClose: 5000 });
      clearCart();
      setTimeout(() => Router.push('/orders'), 1000);
    } catch (err) {
      toast.error('Erro ao realizar pedido!', { position: 'bottom-right', autoClose: 5000 });

      console.log(err);
    }
  }

  const handlePagamento = (e) => {
    setPagamento(e.target.value);
  };

  useEffect(() => {
    setAddress(getAddress());
    setCliente(getCliente());
    pegarPagamento();
    pegarFrete();
  }, [getAddress, getCliente, products]);

  const optionsLinksMobile = [
    {
      label: 'Perfil',
      action: () => Router.push('profile'),
    },
    {
      label: 'Sair',
      action: signOut,
    },
  ];

  const optionsLinks = [
    {
      label: 'Perfil',
      action: () => Router.push('/profile'),
    },
    {
      label: 'Sair',
      action: signOut,
    },
  ];


  function handlerCancelar(){
    router.back()
    clearCart()
  }

  return (
    <S.Wrapper>
      <S.StyledHeader
          buttons={[]}
          buttonsMenulFull={[]}
          handleSandwich={(open) => setIsOpen(open)}
          links={optionsLinks}
          linksMenuFull={optionsLinksMobile}
          openMenuFull={isOpen}
          title="Meu Carrinho"
        />
      <S.WrapperContent>
        <S.Items>
          {products.map((offer, index) => (
            <S.WrapperItem key={index}>
              <S.QuantityContainer>
                <S.ButtonMinus onClick={() => diminuirQuantidade(index)}>
                  <FontAwesomeIcon icon={faMinus} />
                </S.ButtonMinus>
                <S.Quantity>{offer.quantidadeCart}</S.Quantity>
                <S.ButtonPlus onClick={() => aumentarQuantidade(index, offer.quantidade)}>
                  <FontAwesomeIcon icon={faPlus} />
                </S.ButtonPlus>
              </S.QuantityContainer>
              <S.WrapperProd>
                <S.Text id="prodNameDesc"><S.Text id="corProduto"> {offer.produtos.nome} </S.Text> </S.Text>
                <S.Text id="prodPriceDesc">Preço Unitário: <S.Text id="boldPrice">R$ {offer.valor_unitario}</S.Text></S.Text>
              </S.WrapperProd>
              <S.Value>
                R$ {(offer.valor_unitario * offer.quantidadeCart).toFixed(2)}{' '}
              </S.Value>
            </S.WrapperItem>
          ))}
          <S.WrapperSubtotal>
            <S.Row>
              <S.Text>Subtotal</S.Text>
              <S.Value>{`R$: ${subtotal.toFixed(2)}`}</S.Value>
            </S.Row>
            <S.Row>
              <S.Text>Taxa de Entrega</S.Text>
              <S.Value>R$: {freteFixo.toFixed(2)}</S.Value>
            </S.Row>
            <S.Line />
            <S.Row>
              <S.Text>Total </S.Text>
              <S.Value>R$: {total.toFixed(2)}</S.Value>
            </S.Row>
          </S.WrapperSubtotal>
        </S.Items>
        <S.ContainerPagamento>
          <S.WrapperSelect>
            <S.Label>Tipo de Pagamento</S.Label>
            <S.Select value={pagamento} onChange={handlePagamento} >
              {tipoPagamento.map((tipo) => <option key={tipo.id} value={tipo.id}> {tipo.titulo} </option>)}
            </S.Select>
          </S.WrapperSelect>
          <S.Address>
            <S.Label>Endereço</S.Label>
            {endereco && (
              <S.Text>
                {/* {endereco?.cep.toString().replace(/(\d{5})(\d)/, '$1-$2')};{' '} */}
                {'Endereço: '} {endereco.street}, {endereco.number}
                <br /> Bairro: {endereco.neighborhood}{' '}
                <br /> {'Complemento: '} {endereco.complement}
              </S.Text>
            )}
          </S.Address>
        </S.ContainerPagamento>
        <S.WrapperButtons>
          <S.CancelButton onClick={() => handlerCancelar()}>Cancelar</S.CancelButton>
          <S.AcceptButton onClick={() => handlePedido()}>
            Confirmar
        </S.AcceptButton>
        </S.WrapperButtons>
      </S.WrapperContent>
      <Footer/>
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

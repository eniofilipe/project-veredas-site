/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/no-unresolved
import { useContext, useState, useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingBasket,
  faPlus,
  faMinus,
  faCheckCircle,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import * as S from '../../styles/cart/styles'
import veredaslogo from '../../assets/images/logo.png'
import CartContext from '../../contexts/cart'
import AuthContext from '../../contexts/auth'
import Footer from '../../components/Footer'
import { OfertaPedido, Address, CartProps, Pagamento, Frete } from '../../types'
import { cepMask } from '../../Utils/Masks'
import logomst from '../../assets/images/logo-mst-rurais.png'
import logoif from '../../assets/images/logo-if.png'
import { postPedido, getPagamento, getFrete } from '../../api/Pedidos'
import ValidadeContext from '../../contexts/validade'
import {
  getOpenedWithoutToken,
  getValidaTokenWithoutToken
} from '../../api/Validade'

const Cart = () => {
  const Router = useRouter()
  const { signOut } = useContext(AuthContext)
  const {
    products,
    removeProduct,
    resetCart,
    subtotal,
    total,
    freteFixo,
    setFreteFixo,
    idFixo,
    setIdFixo,
    aumentarQuantidade,
    diminuirQuantidade
  } = useContext(CartContext)
  const { validade } = useContext(ValidadeContext)
  const { getCliente, getAddress } = useContext(AuthContext)
  /* const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0) */
  const router = useRouter()
  const [endereco, setAddress] = useState(null)
  const [cliente, setCliente] = useState(null)
  const [tipoPagamento, setTipoPagamento] = useState<Pagamento[]>([])
  const [pagamento, setPagamento] = useState<number>(1)
  const [controle, setControle] = useState(1)
  /* const [freteFixo, setFreteFixo] = useState<number>(0)
  const [idFixo, setIdFixo] = useState<number>(0) */
  const [isOpen, setIsOpen] = useState(false)

  const goToProducts = () => {
    Router.push('/products')
  }

  const pegarPagamento = async () => {
    try {
      const response = await getPagamento()

      setTipoPagamento(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const pegarFrete = async () => {
    try {
      const response = await getFrete()

      setFreteFixo(response.data[0].valor_frete)
      setIdFixo(response.data[0].id)
    } catch (error) {
      console.log(error)
    }
  }

  async function handlePedido() {
    setControle(controle + 1)
    if (controle > 1) {
      return
    }
    try {
      await postPedido({
        ofertas: products.map(
          (c) =>
            ({ oferta_id: c.id, quantidade: c.quantidadeCart } as OfertaPedido)
        ),
        cliente_id: cliente.id,
        tipo_frete_id: idFixo,
        tipo_pagamento_id: pagamento,
        valor_frete: freteFixo
      })
      // {console.log(cliente.id, idFixo, pagamento, freteFixo);}
      toast.success('Pedido realizado com sucesso!', {
        position: 'bottom-right'
      })
      resetCart()
      setTimeout(() => Router.push('/orders'), 1000)
    } catch (err) {
      toast.error('Erro ao realizar pedido!', { position: 'bottom-right' })

      console.log(err)
    }
  }

  const handlePagamento = (e) => {
    setPagamento(e.target.value)
  }

  useEffect(() => {
    setAddress(getAddress())
    setCliente(getCliente())
    pegarPagamento()
    pegarFrete()
  }, [products])

  const optionsLinksMobile = [
    {
      label: 'Perfil',
      action: () => Router.push('profile')
    },
    {
      label: 'Sair',
      action: signOut
    }
  ]

  const optionsLinks = [
    {
      label: 'Perfil',
      action: () => Router.push('/profile')
    },
    {
      label: 'Sair',
      action: signOut
    }
  ]

  const optionsButtons = !validade
    ? []
    : [
        {
          label: 'Ir pra Feirinha',
          action: goToProducts
        }
      ]

  return (
    <S.Wrapper>
      <S.StyledHeader
        buttons={optionsButtons}
        buttonsMenulFull={optionsButtons}
        handleSandwich={(open) => setIsOpen(open)}
        links={optionsLinks}
        linksMenuFull={optionsLinksMobile}
        openMenuFull={isOpen}
        title="Meu Carrinho"
      />
      <S.WrapperContent>
        <S.Items>
          {products.map((offer, index) => (
            <S.WrapperItem>
              <S.QuantityContainer>
                <S.ButtonMinus onClick={() => diminuirQuantidade(index)}>
                  <FontAwesomeIcon icon={faMinus} />
                </S.ButtonMinus>
                <S.Quantity>{offer.quantidadeCart}</S.Quantity>
                <S.ButtonPlus
                  onClick={() => aumentarQuantidade(index, offer.quantidade)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </S.ButtonPlus>
              </S.QuantityContainer>
              <S.WrapperProd>
                <S.Text id="prodNameDesc">
                  Produto:{' '}
                  <S.Text id="corProduto"> {offer.produtos.nome} </S.Text>{' '}
                </S.Text>
                <S.Text id="prodPriceDesc">
                  Preço Unitário:{' '}
                  <S.Text id="boldPrice">R$ {offer.valor_unitario}</S.Text>
                </S.Text>
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
            <S.Select value={pagamento} onChange={handlePagamento}>
              {tipoPagamento.map((tipo) => (
                <option value={tipo.id}> {tipo.titulo} </option>
              ))}
            </S.Select>
          </S.WrapperSelect>
          <S.Address>
            <S.Label>Endereço</S.Label>
            {endereco && (
              <S.Text>
                {/* {endereco?.cep.toString().replace(/(\d{5})(\d)/, '$1-$2')};{' '} */}
                {'Endereço: '} {endereco.street}, {endereco.number}
                <br /> Bairro: {endereco.neighborhood} <br /> {'Complemento: '}{' '}
                {endereco.complement}
              </S.Text>
            )}
          </S.Address>
        </S.ContainerPagamento>
        <S.WrapperButtons>
          <S.CancelButton onClick={() => router.back()}>
            Cancelar
          </S.CancelButton>
          <S.AcceptButton onClick={() => handlePedido()}>
            Confirmar
          </S.AcceptButton>
        </S.WrapperButtons>
      </S.WrapperContent>
      <Footer />
    </S.Wrapper>
  )
}

export default Cart

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  let validade = false

  try {
    const response = await getOpenedWithoutToken()
    if (response.data.success === 'aberta') validade = true
  } catch (error) {
    console.log(error)
  }

  if (!validade) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

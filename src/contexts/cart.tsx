/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React, { createContext, useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'
import { Oferta } from '../types'

interface OfertaCart extends Oferta {
  quantidadeCart: number
}

interface ICartContext {
  products: OfertaCart[]
  subtotal: number
  total: number
  freteFixo: number
  idFixo: number
  setIdFixo: (id: number) => void
  setFreteFixo: (frete: number) => void
  addProduct: (prod: Oferta, quantidade: number) => void
  removeProduct: (prod: Oferta) => void
  checkInCart: (prod: Oferta) => boolean
  getCartLenght: () => number
  resetCart: () => void
  diminiurQuantidade: (index: number) => void
  aumentarQuantidade: (index: number) => void
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<OfertaCart[]>(() => {
    const productsJSON = Cookie.get('cart')
    if (!productsJSON) {
      return []
    }

    const productsAux = JSON.parse(productsJSON) as OfertaCart[]
    return productsAux
  })
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [freteFixo, setFreteFixo] = useState<number>(0)
  const [idFixo, setIdFixo] = useState<number>(0)
  const changeFrete = (value: number) => {
    setFreteFixo(value)
  }

  const changeIdFrete = (value: number) => {
    setIdFixo(value)
  }

  const removeProduct = (prod: Oferta) => {
    setProducts(products.filter((p) => p.id !== prod.id))
    toast.error('Produto Removido', { position: 'bottom-right' })
  }
  const checkInCart = (prod: Oferta) =>
    products.findIndex((p) => p.id === prod.id) > -1

  const getCartLenght = () => {
    let qtd = 0
    products.forEach((prod) => {
      qtd += prod.quantidadeCart
    })
    return qtd
  }

  const addProduct = (prod: Oferta, quantidade: number) => {
    const index = products.findIndex((value) => value.id === prod.id)

    // console.log(index);

    if (index !== -1) {
      const productsAux = products

      productsAux[index] = {
        ...productsAux[index],
        quantidadeCart: productsAux[index].quantidadeCart + quantidade
      }

      setProducts(productsAux)
      toast.success('Produto Adicionado', { position: 'bottom-right' })
    } else {
      const productAux = { ...prod, quantidadeCart: quantidade } as OfertaCart

      setProducts(products.concat(productAux))
      toast.success('Produto Adicionado', { position: 'bottom-right' })
    }
  }

  const resetCart = () => {
    setProducts([])
    Cookie.remove('cart')
  }
  useEffect(() => {
    const resultAux = products.map(
      (prod) => prod.quantidadeCart * prod.valor_unitario
    )

    const result = resultAux.reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0
    )

    setSubtotal(result)
    setTotal(result + freteFixo)

    Cookie.set('cart', JSON.stringify(products))
  }, [products, freteFixo])

  const aumentarQuantidade = (index: number) => {
    if (products[index].quantidadeCart + 1 > products[index].quantidade) {
      return
    }

    const productsAux = [...products]

    productsAux[index].quantidadeCart += 1
    setProducts(productsAux)
  }

  const diminuirQuantidade = (index: number) => {
    if (products[index].quantidadeCart === 1) {
      removeProduct(products[index])
    } else {
      const productsAux = [...products]

      productsAux[index].quantidadeCart -= 1

      setProducts(productsAux)
    }
  }

  return (
    <CartContext.Provider
      value={{
        freteFixo,
        idFixo,
        setFreteFixo: changeFrete,
        setIdFixo: changeIdFrete,
        subtotal,
        total,
        products,
        addProduct,
        removeProduct,
        checkInCart,
        getCartLenght,
        resetCart,
        aumentarQuantidade,
        diminuirQuantidade
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

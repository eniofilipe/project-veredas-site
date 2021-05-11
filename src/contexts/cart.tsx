import { createContext, useState } from 'react'

import { toast } from 'react-toastify'
import { Oferta } from '../types'

interface OfertaCart extends Oferta {
  quantidadeCart: number
}

interface ICartContext {
  products: OfertaCart[]
  addProduct: (prod: Oferta, quantidade: number) => void
  removeProduct: (prod: Oferta) => void
  checkInCart: (prod: Oferta) => boolean
  getCartLenght: () => number
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider: React.FC = ({ children }) => {
  let cartJSON = null
  if (process.browser) {
    cartJSON = localStorage.getItem('cart')
  }

  const [products, setProducts] = useState<OfertaCart[]>(
    process.browser ? (cartJSON !== null ? JSON.parse(cartJSON) : []) : []
  )

  const removeProduct = (prod: Oferta) => {
    const prods = products.filter((p) => p.id !== prod.id)
    setProducts(prods)
    localStorage.setItem('cart', JSON.stringify(prods))
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
      localStorage.setItem('cart', JSON.stringify(productsAux))
      toast.success('Produto Adicionado', { position: 'bottom-right' })
    } else {
      const productAux = { ...prod, quantidadeCart: quantidade } as OfertaCart

      setProducts(products.concat(productAux))
      localStorage.setItem('cart', JSON.stringify(products.concat(productAux)))
      toast.success('Produto Adicionado', { position: 'bottom-right' })
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        checkInCart,
        getCartLenght
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

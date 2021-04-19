/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React, { createContext, useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Oferta } from '../types';

interface OfertaCart extends Oferta {
  quantidadeCart: number;
}

interface ICartContext {
  products: OfertaCart[];
  addProduct: (prod: Oferta, quantidade: number) => void;
  removeProduct: (prod: Oferta) => void;
  checkInCart: (prod: Oferta ) => boolean;
  getCartLenght:() => number;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<OfertaCart[]>([]);

  const removeProduct = (prod: Oferta) => {
    setProducts(products.filter(p => p.id !== prod.id))
    toast.error('Produto Removido', { position: "bottom-right",});
  }
  const checkInCart =(prod: Oferta) => {
    return products.findIndex(p => p.id === prod.id) > - 1
  }

  const getCartLenght = () => {
    var qtd = 0;
    products.forEach(prod => {
      qtd += prod.quantidadeCart
    });
    return qtd;
  }

  const addProduct = (prod: Oferta, quantidade: number) => {
    const index = products.findIndex((value) => value.id === prod.id);

    console.log(index);

    if (index !== -1) {
      const productsAux = products;

      productsAux[index] = {
        ...productsAux[index],
        quantidadeCart: productsAux[index].quantidadeCart + quantidade,
      };

      setProducts(productsAux);
      toast.success('Produto adicionado', { position: "bottom-right",});
    } else {
      const productAux = { ...prod, quantidadeCart: quantidade } as OfertaCart;

      setProducts(products.concat(productAux));
      toast.success('Produto adicionado', { position: "bottom-right",});

    }
  };
  useEffect(() => {
    console.log(products);
  }, [products]);

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
  );
};

export default CartContext;

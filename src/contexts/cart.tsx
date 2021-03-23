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
  addProduct: (prod: Oferta) => void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<OfertaCart[]>([]);

  const addProduct = (prod: Oferta) => {
    const index = products.findIndex((value) => value.id === prod.id);

    console.log(index);

    if (index !== -1) {
      const productsAux = products;

      productsAux[index] = {
        ...productsAux[index],
        quantidadeCart: productsAux[index].quantidadeCart + 1,
      };

      setProducts(productsAux);
      toast.success('Produto adicionado');
    } else {
      const productAux = { ...prod, quantidadeCart: 1 } as OfertaCart;

      setProducts(products.concat(productAux));
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

import React, { createContext, useState, useEffect } from 'react';

import { getProdutosOfertas } from '../api/Ofertas';
import { Oferta } from '../types';

interface IValidContext {
  validade: Oferta[] | null;
}

const ValidadeContext = createContext<IValidContext>({} as IValidContext);

export const ValidadeProvider: React.FC = ({ children }) => {
  const [validade, setValidade] = useState<Oferta[] | null>();

  const get = async () => {
    try {
      const response = await getProdutosOfertas();

      setValidade(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <ValidadeContext.Provider
      value={{
        validade,
      }}
    >
      {children}
    </ValidadeContext.Provider>
  );
};

export default ValidadeContext;

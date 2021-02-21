/* eslint-disable no-use-before-define */
import React, { createContext, useState, useEffect } from 'react';

import { getProdutosOfertas } from '../api/Ofertas';

interface IValidContext {
  validade: boolean | null;
}

const ValidadeContext = createContext<IValidContext>({} as IValidContext);

export const ValidadeProvider: React.FC = ({ children }) => {
  const [validade, setValidade] = useState<boolean | null>();

  const get = async () => {
    try {
      const response = await getProdutosOfertas();

      setValidade(response.data.length > 0);
    } catch (error) {
      // eslint-disable-next-line no-console
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

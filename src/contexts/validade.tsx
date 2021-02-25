/* eslint-disable no-use-before-define */
import React, { createContext, useState, useEffect } from 'react';

import { getOpened } from '../api/Validade';

interface IValidContext {
  validade: boolean | null;
}

const ValidadeContext = createContext<IValidContext>({} as IValidContext);

export const ValidadeProvider: React.FC = ({ children }) => {
  const [validade, setValidade] = useState<boolean | null>();

  const get = async () => {
    try {
      const response = await getOpened();

      console.log(response);

      setValidade(!response.data.success);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setValidade(false);
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

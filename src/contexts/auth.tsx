/* eslint-disable no-throw-literal */
/* eslint-disable import/no-unresolved */
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLogin } from '../api/Login';
import { ClienteLogin, Login } from '../types';
import { getValidaToken } from '../api/Validade';

interface IAuthContext {
  signed: boolean;
  cliente: ClienteLogin | null;
  signIn: (data: Login) => Promise<404 | 200 | 403>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [cliente, setCliente] = useState<ClienteLogin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleToken = async () => {
    const localToken = localStorage.getItem('token');
    try {
      const response = await getValidaToken(localToken);

      setCliente({
        nome: response.data.nome,
        email: response.data.email,
        id: response.data.id,
      });
    } catch (e) {
      console.log(e);
      setCliente(null);
    }
  };

  useEffect(() => {
    handleToken();
  }, []);

  const signIn = async (data: Login) => {
    localStorage.clear();
    try {
      const response = await getLogin({
        email: data.email,
        password: data.password,
      });
      if (response.data.option !== 'cliente') {
        return 403;
      }
      setToken(response.data.token);
      setCliente(response.data.client);
      localStorage.setItem('token', response.data.token);
      router.push('/products');
      return 200;
    } catch (error) {
      console.log(error);
      return 404;
    }
  };

  function signOut() {
    setCliente(null);
    setToken(null);
    localStorage.clear();
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!cliente,
        cliente,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

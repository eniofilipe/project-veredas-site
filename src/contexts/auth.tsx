import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLogin } from '../api/Login';
import { ClienteLogin, Login } from '../types';
import { getValidaToken } from '../api/Validade';

interface IAuthContext {
  signed: boolean;
  cliente: ClienteLogin | null;
  signIn: (data: Login) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [cliente, setCliente] = useState<ClienteLogin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleToken = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await getValidaToken(token);

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
    try {
      const response = await getLogin({
        email: data.email,
        password: data.password,
      });

      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      router.push('/products');
    } catch (error) {
      console.log(error);
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

import React, { useContext, useState } from 'react';
import Head from 'next/head';

import AuthContext from '../../contexts/auth';

import {
  Header,
  Content,
  LoginContainer,
  ButtonLogin,
  Logo,
  InputLogin,
} from './styles';
import veredaslogo from '../../assets/logo.png';

const login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn({
      email,
      password,
    });
  };

  return (
    <div>
      <Head>
        <title>Veredas da terra</title>
      </Head>

      <body>
        <Header>
          <Logo src={veredaslogo} alt="" />
        </Header>
        <Content>
          <LoginContainer>
            <div>
              <span>Usuário</span>
              <InputLogin
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <span>Senha</span>
              <InputLogin
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <ButtonLogin onClick={handleLogin}>Acessar</ButtonLogin>
            <ButtonLogin clear onClick={() => {}}>
              Criar conta
            </ButtonLogin>
          </LoginContainer>
        </Content>
      </body>
    </div>
  );
};

export default login;

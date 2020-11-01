import React from 'react';
import Head from 'next/head';

import {
  Header,
  Content,
  LoginContainer,
  ButtonLogin,
  Logo,
  InputLogin,
} from './styles';
import veredaslogo from '../../assets/logo.png';

const login = () => (
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
            <InputLogin type="email" />
          </div>
          <div>
            <span>Senha</span>
            <InputLogin type="password" />
          </div>

          <ButtonLogin onClick={() => {}}>Acessar</ButtonLogin>
          <ButtonLogin clear onClick={() => {}}>
            Criar conta
          </ButtonLogin>
        </LoginContainer>
      </Content>
    </body>
  </div>
);

export default login;

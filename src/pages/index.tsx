import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import veredaslogo from '../assets/logo.png';

const Home = () => (
  <div>
    <Head>
      <title>Veredas da terra</title>
    </Head>

    <body>
      <Header>
        <Logo src={veredaslogo} alt="" />
      </Header>
      <Content>
        <Title>BEM VINDO À CESTA DA REFORMA AGRÁRIA</Title>
        <SubTitle>
          Aqui nós oferecemos os alimentos orgânicos de melhor qualidade, direto
          do campo da agricultura familiar.
        </SubTitle>
        <Button>Entrar na feirinha</Button>
        <ErrorMessage>
          Feirinha não está disponível. Novos Pedidos de Domingo à Terça.
        </ErrorMessage>
      </Content>
    </body>
  </div>
);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const Logo = styled.img`
  width: auto;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 25px;
`;

const Button = styled.button`
  color: white;
  background: rgba(30, 149, 31, 0.4);
  width: 80%;
  border-radius: 8px;
  height: 62px;
  align-self: center;
  border: 0px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

const ErrorMessage = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.danger};
  text-align: center;
  margin-top: 10px;
`;
export default Home;

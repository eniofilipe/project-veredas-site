import React from 'react';

import {
  Header,
  Container,
  RegisterContainer,
  InfoContainer,
  AddressContainer,
  InputContainer,
  InputForm,
  ButtonsContainer,
  ButtonLogin,
  FinallyButton,
} from './styles';

const register = () => (
  <div>
    <body>
      <Header>Cadastro</Header>
      <Container>
        <RegisterContainer>
          <InfoContainer>
            <span>Dados</span>
            <InputContainer>
              <span>Nome:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>CPF:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Telefone:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>E-mail:</span>
              <InputForm type="email" />
            </InputContainer>
            <InputContainer>
              <span>Senha:</span>
              <InputForm type="password" />
            </InputContainer>
            <InputContainer>
              <span>Confirmar senha:</span>
              <InputForm type="password" />
            </InputContainer>
          </InfoContainer>
          <AddressContainer>
            <span>Endereço</span>
            <InputContainer>
              <span>CEP:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Bairro:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Rua:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Número:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Compl:</span>
              <InputForm type="text" />
            </InputContainer>
            <InputContainer>
              <span>Referência:</span>
              <InputForm type="text" />
            </InputContainer>
          </AddressContainer>
        </RegisterContainer>
        <ButtonsContainer>
          <ButtonLogin clear onClick={() => {}}>
            Já tenho uma conta
          </ButtonLogin>
          <FinallyButton onClick={() => {}}>Finalizar</FinallyButton>
        </ButtonsContainer>
      </Container>
    </body>
  </div>
);

export default register;

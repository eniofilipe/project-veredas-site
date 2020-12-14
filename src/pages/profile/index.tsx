/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';

import * as S from './styles';
import veredaslogo from '../../assets/logo.png';

export type ProfileProps = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  cep: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
  ref?: string;
};

const profile = {
  name: 'Kevin',
  cpf: '022.000.000-60',
  phone: '(38) 98888-8888',
  email: 'kevin@email.com',
  cep: '39404-154',
  neighborhood: 'Jardim Primavera',
  street: 'Rua Trinta e dois',
  number: '112A',
};

const Profile = () => (
  <S.Wrapper>
    <Head>
      <title>Veredas da terra</title>
    </Head>
    <body>
      <S.Header>
        <S.Logo src={veredaslogo} alt="" />
        <S.Title>Perfil</S.Title>
        <S.WrapperMenu>
          <S.Title>Pedidos</S.Title>
          <S.Title>Sair</S.Title>
        </S.WrapperMenu>
      </S.Header>

      <S.WrapperContent>
        <S.WrapperData>
          <S.Title>Dados</S.Title>
          <S.Row>
            <S.Label> Nome: </S.Label>
            <S.Input value={profile.name} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> CPF: </S.Label>
            <S.Input value={profile.cpf} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Telefone: </S.Label>
            <S.Input value={profile.phone} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> E-Mail: </S.Label>
            <S.Input value={profile.email} readOnly />
          </S.Row>
          <S.Button>Alterar Senha</S.Button>
        </S.WrapperData>
        <S.WrapperAddress>
          <S.Title>Endereço</S.Title>
          <S.Row>
            <S.Label> CEP: </S.Label>
            <S.Input value={profile.cep} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Bairro: </S.Label>
            <S.Input value={profile.neighborhood} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Rua: </S.Label>
            <S.Input value={profile.street} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Número: </S.Label>
            <S.Input value={profile.number} readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Compl.: </S.Label>
            <S.Input readOnly />
          </S.Row>
          <S.Row>
            <S.Label> Referência: </S.Label>
            <S.Input readOnly />
          </S.Row>
        </S.WrapperAddress>
      </S.WrapperContent>
      <S.Button>Editar Perfil</S.Button>
    </body>
  </S.Wrapper>
);

export default Profile;

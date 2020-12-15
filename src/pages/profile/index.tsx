/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import AuthContext from '../../contexts/auth';

import { Cliente } from '../../types';

import { getDetails } from '../../api/Clientes';

const Profile = () => {
  const Router = useRouter();
  const { cliente, signOut } = useContext(AuthContext);

  const [profileData, setProfileData] = useState<Cliente>();

  const fetchDetails = async () => {
    if (cliente) {
      try {
        const response = await getDetails(cliente.id);

        setProfileData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.Header>
          <S.Logo src={veredaslogo} alt="" />
          <S.Title>Perfil</S.Title>
          <S.WrapperMenu>
            <S.Title onClick={() => Router.push('/orders')}> Pedidos</S.Title>
            <S.Title onClick={signOut}>Sair</S.Title>
          </S.WrapperMenu>
        </S.Header>

        <S.WrapperContent>
          <S.WrapperData>
            <S.Title>Dados</S.Title>
            <S.Row>
              <S.Label> Nome: </S.Label>
              <S.Input value={profileData?.nome} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> CPF: </S.Label>
              <S.Input value={profileData?.cpf} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Telefone: </S.Label>
              <S.Input value={profileData?.telefone} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> E-Mail: </S.Label>
              <S.Input value={profileData?.email} readOnly />
            </S.Row>
            <S.Button>Alterar Senha</S.Button>
          </S.WrapperData>
          <S.WrapperAddress>
            <S.Title>Endereço</S.Title>
            <S.Row>
              <S.Label> CEP: </S.Label>
              <S.Input value={profileData?.enderecos.cep} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Bairro: </S.Label>
              <S.Input value={profileData?.enderecos.bairro} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Rua: </S.Label>
              <S.Input value={profileData?.enderecos.logradouro} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Número: </S.Label>
              <S.Input value={profileData?.enderecos.numero} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Compl.: </S.Label>
              <S.Input value={profileData?.enderecos.complemento} readOnly />
            </S.Row>
            <S.Row>
              <S.Label> Referência: </S.Label>
              <S.Input value={profileData?.enderecos.referencia} readOnly />
            </S.Row>
          </S.WrapperAddress>
        </S.WrapperContent>
        <S.Button>Editar Perfil</S.Button>
      </body>
    </S.Wrapper>
  );
};

export default Profile;

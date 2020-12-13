/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';
import { useState } from 'react';
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

const Profile = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [reference, setReference] = useState('');

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <S.Header>
        <S.Logo src={veredaslogo} alt="" />
        <S.Title>Cadastro</S.Title>
      </S.Header>
      <S.Body>
        <S.WrapperController>
          <S.WrapperContent>
            <S.WrapperData>
              <S.Title>Dados</S.Title>
              <S.Row>
                <S.Label> Nome: </S.Label>
                <S.Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> CPF: </S.Label>
                <S.Input value={cpf} onChange={(e) => setCpf(e.target.value)} />
              </S.Row>
              <S.Row>
                <S.Label> Telefone: </S.Label>
                <S.Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> E-Mail: </S.Label>
                <S.Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </S.Row>

              <S.Row>
                <S.Label> Senha: </S.Label>
                <S.Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </S.Row>

              <S.Row>
                <S.Label> Confirmar Senha: </S.Label>
                <S.Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                />
              </S.Row>
            </S.WrapperData>
            <S.WrapperAddress>
              <S.Title>Endereço</S.Title>
              <S.Row>
                <S.Label> CEP: </S.Label>
                <S.Input value={cep} onChange={(e) => setCep(e.target.value)} />
              </S.Row>
              <S.Row>
                <S.Label> Bairro: </S.Label>
                <S.Input
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Rua: </S.Label>
                <S.Input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Número: </S.Label>
                <S.Input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Compl.: </S.Label>
                <S.Input
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Referência: </S.Label>
                <S.Input
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
              </S.Row>
            </S.WrapperAddress>
          </S.WrapperContent>
          <S.WrapperButtons>
            <S.Button>Já tenho conta</S.Button>
            <S.Button>Finalizar</S.Button>
          </S.WrapperButtons>
        </S.WrapperController>
      </S.Body>
    </S.Wrapper>
  );
};

export default Profile;

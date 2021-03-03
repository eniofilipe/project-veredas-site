/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import searchCep from 'cep-promise';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import { postClientes } from '../../api/Clientes';
import { isEmail, validarCPF } from '../../Utils/Validation';
import { cepMask, cellphoneeMask, cpfMask } from '../../Utils/Masks';
import ValidadeContext from '../../contexts/validade';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';
import logowhite from '../../assets/logo-white.png';

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
  const router = useRouter();
  const { validade } = useContext(ValidadeContext);

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
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (cep) {
      setCep(cepMask(cep));
      if (cep.length === 9) {
        searchCep(cep.replace(/\D/g, '')).then(setValuesCep).catch(errorCep);
      }
    }

    function errorCep() {
      toast.warn('CEP não encontrado!');
    }
    function setValuesCep(data: any) {
      console.log(data);
      setEstado(data.state);
      setCidade(data.city);
      setNeighborhood(data.neighborhood);
      setStreet(data.street);
    }
  }, [cep]);

  const register = async () => {
    try {
      if (!validarCPF(cpf)) {
        toast.warn('CPF Inválido');
        return;
      }

      if (!isEmail(email)) {
        toast.warn('Email Inválido');
        return;
      }

      if (!isEmail(email)) {
        toast.warn('Email Inválido');
        return;
      }

      if (password !== confirmPassword) {
        toast.warn('As senhas não coincidem');
        return;
      }

      if (password.length < 6) {
        toast.warn('As senhas não coincidem');
        return;
      }
      await postClientes({
        bairro: neighborhood,
        cep,
        cidade,
        cpf,
        email,
        estado,
        logradouro: street,
        nome: name,
        numero: number,
        password,
        telefone: phone,
      });

      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const goToProducts = () => {
    router.push('/products');
  };

  const goToLogin = () => {
    router.push('/login');
  };
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Header>
          <S.Logo src={veredaslogo} alt="" />
          <S.MenuNav>
            <S.MenuLink onClick={() => router.push('/')}>Home</S.MenuLink>
            <S.MenuLink onClick={() => router.push('/')}>Quem somos</S.MenuLink>
            <S.MenuLink onClick={() => router.push('/')}>
              Como Funciona
            </S.MenuLink>
            {!validade ? (
              <S.Button onClick={goToLogin}>Acessar Conta</S.Button>
            ) : (
              <S.Button onClick={goToProducts}>Entrar na Feirinha</S.Button>
            )}
          </S.MenuNav>
        </S.Header>
      </S.HeaderWrapper>
      <S.Body>
        <S.WrapperController>
          <S.Title>Cadastro</S.Title>
          <S.WrapperContent>
            <S.WrapperData>
              <S.Title>Dados Pessoais</S.Title>
              <S.Form>
                <S.Row>
                  <S.Label> Nome: </S.Label>
                  <S.Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </S.Row>
                <S.Row>
                  <S.Label> CPF: </S.Label>
                  <S.Input
                    value={cpf}
                    onChange={(e) => setCpf(cpfMask(e.target.value))}
                  />
                </S.Row>
                <S.Row>
                  <S.Label> Celular: </S.Label>
                  <S.Input
                    value={phone}
                    onChange={(e) => setPhone(cellphoneeMask(e.target.value))}
                  />
                </S.Row>
              </S.Form>
            </S.WrapperData>
            <S.WrapperData>
              <S.Title>Dados de Acesso</S.Title>
              <S.Form>
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
              </S.Form>
            </S.WrapperData>
          </S.WrapperContent>
          <S.WrapperAddress>
            <S.Title>Endereço</S.Title>
            <S.WrapperDataAddress>
              <S.Row>
                <S.Label> CEP: </S.Label>
                <S.Input value={cep} onChange={(e) => setCep(e.target.value)} />
              </S.Row>
              <S.Row>
                <S.Label> Cidade: </S.Label>
                <S.Input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Estado: </S.Label>
                <S.Input
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
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
            </S.WrapperDataAddress>
          </S.WrapperAddress>
        </S.WrapperController>
        <S.WrapperButtons>
          <S.Button onClick={() => router.push('/login')}>
            Já tenho conta
          </S.Button>
          <S.Button onClick={() => register()}>Finalizar</S.Button>
        </S.WrapperButtons>
      </S.Body>

      <S.WrapperFooter>
        <div>
          <p>Cooperativa Veredas da Terra</p>
          <p>CNPJ: 33.870.746/0001-05</p>
        </div>

        <div>
          <p>Contato</p>
          <p>email@veredasdaterra.com.br</p>
          <p>+55 38 9 995133333</p>
        </div>

        <div>
          <S.Logo src={logowhite} alt="Logo da cooperativa Veredas da Terra" />
          <S.Logo src={logomst} alt="Logo do MST" />
          <S.Logo src={logoif} alt="Logo do IFNMG" />
        </div>
      </S.WrapperFooter>
    </S.Wrapper>
  );
};

export default Profile;

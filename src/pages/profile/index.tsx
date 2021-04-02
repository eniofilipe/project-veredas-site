/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import AuthContext from '../../contexts/auth';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';
import logowhite from '../../assets/logo-white.png';
import { Cliente } from '../../types';
import { cleanObject, isEmail, validarCPF } from '../../Utils/Validation';
import { cepMask, cellphoneeMask, cpfMask } from '../../Utils/Masks';

import { getDetails, updateProfile } from '../../api/Clientes';

const Profile = () => {
  const [roDadosPessoais, setRoDP] = useState(true);
  const [roSenha, setRoS] = useState(true);
  const [roEndereco, setRoE] = useState(true);

  const Router = useRouter();
  const { cliente, signOut } = useContext(AuthContext);

  const [profileData, setProfileData] = useState<Cliente>();

  const [oldPassword, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [referencia, setReferencia] = useState('');
  const [telefone, setTelefone] = useState('');

  const fetchDetails = async () => {
    if (cliente) {
      try {
        const { data } = await getDetails(cliente.id);
        console.log({
          data,
        });
        setProfileData(data);
        setBairro(data.enderecos.bairro);
        setCep(cepMask(`${data.enderecos.cep}`));
        setCidade(data.enderecos.cidade);
        setComplemento(data.enderecos.complemento);
        setCpf(cpfMask(data.cpf));
        setEmail(data.email);
        setEstado(data.enderecos.estado);
        setLogradouro(data.enderecos.logradouro);
        setNome(data.nome);
        setNumero(data.enderecos.numero);
        setReferencia(data.enderecos.referencia);
        setTelefone(cellphoneeMask(data.telefone));
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  function reset() {
    fetchDetails();
    setRoE(true);
    setRoS(true);
    setRoDP(true);
    setOldpassword('');
    setPassword('');
    setConfirmPassword('');
  }

  async function putProfile() {
    try {
      if (!validarCPF(cpf)) {
        toast.warn('CPF inválido');
        return;
      }
      if (oldPassword && password !== confirmPassword) {
        toast.warn('As senhas não coincidem.');
        setOldpassword('');
        setPassword('');
        setConfirmPassword('');
        return;
      }
      if (oldPassword && password.length < 6) {
        toast.warn('Sua senha deve ter pelo menos 6 caracteres.');
        setOldpassword('');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      if (!isEmail(email)) {
        toast.warn('Email inválido.');
        return;
      }
      const data = {
        bairro,
        cep: cep.replace(/\D/g, ''),
        cidade,
        complemento,
        cpf: cpf.replace(/\D/g, ''),
        email,
        estado,
        logradouro,
        nome,
        numero,
        referencia,
        telefone: telefone.replace(/\D/g, ''),
        password,
        oldPassword,
      };
      await updateProfile(cleanObject(data));
      toast.success('Perfil atualizado com sucesso.');
      reset();
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            toast.warn('Falha na validação de seus dados');
            break;
          case 404:
            toast.warn(
              'Usuário não encontrado. Recomendamos que saia e faça o login novamente.',
            );
            break;

          case 401:
            toast.warn('Senha atual incorreta.');
            setOldpassword('');
            setPassword('');
            setConfirmPassword('');
            break;

          case 402:
            toast.warn('Email já cadastrado em nossas bases de dados.');
            break;

          default:
            toast.error('Erro ao atualizar o perfil.');
        }
      }
      console.log(err);
    }
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.HeaderWrapper>
          <S.Header>
            <S.Logo src={veredaslogo} alt="" />
            <S.TitlePerfil>Perfil</S.TitlePerfil>
            <S.WrapperMenu>
              <S.Title onClick={() => Router.push('/orders')}> Pedidos</S.Title>
              <S.Title onClick={signOut}>Sair</S.Title>
            </S.WrapperMenu>
          </S.Header>
        </S.HeaderWrapper>
        <S.WrapperController>
          <S.WrapperContent>
            <S.WrapperData>
              <S.CardHeader>
                <S.Title>Dados Pessoais</S.Title>
                {roDadosPessoais ? (
                  <S.Button onClick={() => setRoDP(false)}>
                    Editar
                  </S.Button>
                ) : (
                  <S.EditButtons>
                    <S.Button onClick={() => putProfile()}>
                      Confirmar
                    </S.Button>
                    <S.Button onClick={() => reset()}>
                      Cancelar
                    </S.Button>
                  </S.EditButtons>
                )}
              </S.CardHeader>

              <S.Form>
                <S.Row>
                  <S.Label> Nome: </S.Label>
                  <S.Input
                    value={nome}
                    readOnly={roDadosPessoais}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </S.Row>
                <S.Row>
                  <S.Label> CPF: </S.Label>
                  <S.Input
                    value={cpf}
                    readOnly={roDadosPessoais}
                    onChange={(e) => setCpf(cpfMask(e.target.value))}
                  />
                </S.Row>
                <S.Row>
                  <S.Label> Celular: </S.Label>
                  <S.Input
                    value={telefone}
                    readOnly={roDadosPessoais}
                    onChange={(e) => setTelefone(cellphoneeMask(e.target.value))}
                    />
                </S.Row>
              </S.Form>
            </S.WrapperData>
            <S.WrapperData>
              <S.Title>Dados de Acesso</S.Title>
              <S.Form>
                <S.Row>
                  <S.Label> E-Mail: </S.Label>
                  <S.Input value={email} readOnly />
                </S.Row>
                <S.Row>
                  {roSenha ? (
                    <S.Button onClick={() => setRoS(false)}>
                      Alterar Senha
                    </S.Button>
                  ) : (
                    <S.EditButtons>
                      <S.Button onClick={() => putProfile()}>
                        Confirmar
                      </S.Button>
                      <S.Button onClick={() => reset()}>
                        Cancelar
                      </S.Button>
                    </S.EditButtons>
                  )}
                </S.Row>

                {!roSenha && (
                  <S.Form>
                    <S.Row>
                      <S.Label>Senha Atual: </S.Label>
                      <S.Input
                        type="password"
                        onChange={(e) => setOldpassword(e.target.value)}
                        value={oldPassword}
                      />
                    </S.Row>

                    <S.Row>
                      <S.Label>Nova Senha: </S.Label>
                      <S.Input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </S.Row>

                    <S.Row>
                      <S.Label>Confirmação: </S.Label>
                      <S.Input
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                      />
                    </S.Row>
                  </S.Form>
                )}
              </S.Form>
            </S.WrapperData>
          </S.WrapperContent>
          <S.WrapperAddress>
            <S.CardHeader>
              <S.Title>Endereço</S.Title>
              {roEndereco ? (
                <S.Button onClick={() => setRoE(false)}>Editar</S.Button>
              ) : (
                <S.EditButtons>
                  <S.Button onClick={() => putProfile()}>
                    Confirmar
                  </S.Button>
                  <S.Button onClick={() => reset()}>
                    Cancelar
                  </S.Button>
                </S.EditButtons>
              )}
            </S.CardHeader>
            <S.WrapperDataAddress>
              <S.Row>
                <S.Label> CEP: </S.Label>
                <S.Input
                  value={cep}
                  readOnly={roEndereco}
                  onChange={(e) => setCep(cepMask(e.target.value))}
                />
              </S.Row>
              <S.Row>
                <S.Label> Cidade: </S.Label>
                <S.Input
                  value={cidade}
                  readOnly={roEndereco}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Estado: </S.Label>
                <S.Input
                  value={estado}
                  readOnly={roEndereco}
                  onChange={(e) => setEstado(e.target.value)}
                />
              </S.Row>

              <S.Row>
                <S.Label> Bairro: </S.Label>
                <S.Input
                  value={bairro}
                  readOnly={roEndereco}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Logradouro: </S.Label>
                <S.Input
                  value={logradouro}
                  readOnly={roEndereco}
                  onChange={(e) => setLogradouro(e.target.value)}
                />
              </S.Row>
              <S.Row>
                <S.Label> Compl.: </S.Label>
                <S.Input
                  value={complemento}
                  readOnly={roEndereco}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </S.Row>
            </S.WrapperDataAddress>
          </S.WrapperAddress>
        </S.WrapperController>
      </body>
      <S.WrapperFooter>
        <div>
          <p>Cooperativa Camponesa - Veredas da Terra</p>
          <p>CNPJ: 10.286.881/0001-02</p>
        </div>
        <div>
          <p>Contato</p>
          <p>contato@veredasdaterra.com.br</p>
          <p>(38) 9 9900-0000</p>
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

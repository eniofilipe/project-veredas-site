/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
import { useContext, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/auth';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import ValidadeContext from '../../contexts/validade';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';

import { postRecuperarSenha } from '../../api/RecuperarSenha';
import { PostRecuperarSenhaProps } from '../../types/index';

const PasswordRecovery = () => {
  const { validade } = useContext(ValidadeContext);
  const Router = useRouter();

  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToProducts = () => {
    Router.push('/products');
  };

  const goToLogin = () => {
    Router.push('/register');
  };

  // const [email, setEmail] = useState('');

  const setRecuperarSenha = async (data: PostRecuperarSenhaProps) => {
    try {
      const response = await postRecuperarSenha(data);
      console.log(data);
      toast.success('Confira seu email!');
      Router.push('/login');

      // setProdutosOferta(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.HeaderWrapper>
          <S.Header>
            <S.Logo src={veredaslogo} alt="Home" onClick={() => Router.push('/')}/>
            <S.MenuNav>
              <S.MenuLink onClick={() => Router.push('/')}>Home</S.MenuLink>
              <S.MenuLink onClick={() => Router.push('/')}>
                Quem somos
              </S.MenuLink>
              <S.MenuLink onClick={() => Router.push('/')}>
                Como Funciona
              </S.MenuLink>
              {!validade ? (
                <S.Button onClick={goToLogin}>Criar conta</S.Button>
              ) : (
                <S.Button onClick={goToProducts}>Entrar na Feirinha</S.Button>
              )}
            </S.MenuNav>
          </S.Header>
        </S.HeaderWrapper>
        <S.Content>
          <S.LoginContainer>
            <h1>Recuperar Senha</h1>
            <div>
              <S.Icon>
                <EmailIcon />
              </S.Icon>
              <span>Email</span>
              <S.InputLogin
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <S.ButtonLogin onClick={() => setRecuperarSenha({ email })}>
              Enviar
            </S.ButtonLogin>
          </S.LoginContainer>
        </S.Content>
      </body>
      <S.WrapperFooter>
        <div>
          <p>Cooperativa Camponesa - Veredas da Terra</p>
          <p>CNPJ: 10.286.881/0001-02</p>
          <p>Entregas realizadas somente na cidade de Montes Claros/MG.</p>
        </div>

        <div>
          <p>Contato</p>
          <p>email@veredasdaterra.com.br</p>
          <p>(38) 9 9900-0000</p>
        </div>

        <div>
          <S.Logo
            src={veredaslogo}
            alt="Logo da cooperativa Veredas da Terra"
          />
          <S.Logo src={logomst} alt="Logo do MST" />
          <S.Logo src={logoif} alt="Logo do IFNMG" />
        </div>
      </S.WrapperFooter>
    </div>
  );
};

export default PasswordRecovery;

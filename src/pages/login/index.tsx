/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
import { useContext, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import AuthContext from '../../contexts/auth';
import * as S from '../../styles/login/styles';
import veredaslogo from '../../assets/images/logo.png';
import ValidadeContext from '../../contexts/validade';
import logomst from '../../assets/images/logo-mst-rurais.png';
import logoif from '../../assets/images/logo-if.png';

const Login = () => {
  const { validade } = useContext(ValidadeContext);
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const code = await signIn({
        email,
        password,
      });

      switch (code) {
        case 404:
          toast.warn('Credenciais incorretas. Tente novamente');
          break;
        case 403:
          toast.warn('Essa conta percente a um administrador.');
          break;
        case 200:
          toast.success('Seja bem vindo', { position: 'bottom-right' });
          break;
        default:
          toast.success('Ocorreu um erro ao tentar realizar o login');
      }
    } catch (err) {
      console.log(err);
      toast.warn('Credenciais incorretas. Tente novamente');
    }
  };
  const goToProducts = () => {
    Router.push('/products');
  };

  const goToLogin = () => {
    Router.push('/register');
  };
  const goToPasswordRecovery = () => {
    Router.push('/passwordRecovery');
  };

  const optionsLinksMobile = [
    {
      label: 'Home',
      action: () => Router.push('/'),
    },
  ];

  const optionsLinks = [
    {
      label: 'Home',
      action: () => Router.push('/'),
    },
  ];

  const optionsButtons = !validade
    ? [
      {
        label: 'Criar conta',
        action: goToLogin,
      },
    ]
    : [
      {
        label: 'Entrar na Feirinha',
        action: goToProducts,
      },
    ];

  return (
    <>
      <Head>
        <title>Veredas da terra</title>
      </Head>

      <S.HeaderWrapper>
        <S.StyledHeader
          links={optionsLinks}
          buttons={optionsButtons}
          linksMenuFull={optionsLinksMobile}
          buttonsMenulFull={optionsButtons}
          handleSandwich={(open) => setIsOpen(open)}
          openMenuFull={isOpen}
        />
      </S.HeaderWrapper>
      <S.Content>
        <S.LoginContainer>
          <h1>Acesso</h1>
          <div>
            <S.Icon>
              <EmailIcon className="login-icon" />
            </S.Icon>
            <span>Email</span>
            <S.InputLogin
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <S.Icon>
              <LockIcon className="login-icon" />
            </S.Icon>
            <span>Senha</span>
            <S.InputLogin
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <S.SubTitle onClick={goToPasswordRecovery}>
            Esqueci a senha
          </S.SubTitle>
          <p />
          <S.LoginContainer className="botoes">
            <S.ButtonLogin onClick={() => handleLogin()}>Acessar</S.ButtonLogin>
            <S.ButtonLogin onClick={() => Router.push('/register')}>
              Criar Conta
            </S.ButtonLogin>
          </S.LoginContainer>
        </S.LoginContainer>
      </S.Content>
      <Footer />
    </>
  );
};

export default Login;

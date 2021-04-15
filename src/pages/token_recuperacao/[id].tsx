import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Head from 'next/head';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { toast } from 'react-toastify';
import AuthContext from '../../contexts/auth';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import ValidadeContext from '../../contexts/validade';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';
import { postResetarSenha } from '../../api/ResetarSenha';
import { PostResetarSenhaProps } from '../../types/index';

const ResetarSenha = () => {
  const Router = useRouter();
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { validade } = useContext(ValidadeContext);

  const { id } = Router.query;
  const goToProducts = () => {
    Router.push('/products');
  };

  const goToLogin = () => {
    Router.push('/register');
  };
  const setResetarSenha = async (
    _password: string,
    _passwordRepeat: string,
  ) => {
    if (_password !== _passwordRepeat) {
      console.log('senhas nao conferem');
    }
    if (_password.length < 6) {
      console.log('senha pequena demais');
    }
    try {
      const obj = { password: _password, token: id };
      console.log(obj);
      const response = await postResetarSenha(obj);
      if (!response.data.error) {
        toast.success('sucesso ao atualizar senha');
        Router.push('/login');
      }

      console.log(response);
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
            <S.Logo src={veredaslogo} alt="" />
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
            <h1>Resetar Senha</h1>
            <div>
              <S.Icon>
                <LockIcon />
              </S.Icon>
              <span>Nova Senha</span>
              <S.InputLogin
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <S.Icon>
                <LockIcon />
              </S.Icon>
              <span>Repetir Senha</span>
              <S.InputLogin
                type="password"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </div>

            <S.ButtonLogin
              onClick={() => setResetarSenha(password, passwordRepeat)}
            >
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

export default ResetarSenha;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-unresolved */
import { useContext, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AuthContext from '../../contexts/auth';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';

const Login = () => {
  const Router = useRouter();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn({
      email,
      password,
    });
  };

  return (
    <div>
      <Head>
        <title>Veredas da terra</title>
      </Head>

      <body>
        <S.Header>
          <S.Logo src={veredaslogo} alt="" />
        </S.Header>
        <S.Content>
          <S.LoginContainer>
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
            <div>
              <S.Icon>
                <LockIcon />
              </S.Icon>
              <span>Senha</span>
              <S.InputLogin
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <S.SubTitle>Recuperar Senha</S.SubTitle>

            <S.ButtonLogin onClick={handleLogin}>Acessar</S.ButtonLogin>
            <S.ButtonLogin clear onClick={() => Router.push('/register')}>
              Criar conta
            </S.ButtonLogin>
          </S.LoginContainer>
        </S.Content>
      </body>
    </div>
  );
};

export default Login;

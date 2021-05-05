import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import Head from 'next/head'

import LockIcon from '@material-ui/icons/Lock';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import * as S from '../../styles/token_recuperacao/styles'
import veredaslogo from '../../assets/images/logo.png'
import ValidadeContext from '../../contexts/validade'
import logomst from '../../assets/images/logo-mst-rurais.png'
import logoif from '../../assets/images/logo-if.png'
import { postResetarSenha } from '../../api/ResetarSenha'

const ResetarSenha = () => {
  const Router = useRouter()
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const { validade } = useContext(ValidadeContext)
  const [isOpen, setIsOpen] = useState(false)
  const { id } = Router.query
  const goToProducts = () => {
    Router.push('/products')
  }

  const goToLogin = () => {
    Router.push('/register')
  }
  const setResetarSenha = async (
    _password: string,
    _passwordRepeat: string
  ) => {
    if (_password !== _passwordRepeat) {
      console.log('senhas nao conferem')
    }
    if (_password.length < 6) {
      console.log('senha pequena demais')
    }
    try {
      const obj = { password: _password, token: id }
      console.log(obj)
      const response = await postResetarSenha(obj)
      if (!response.data.error) {
        toast.success('sucesso ao atualizar senha')
        Router.push('/login')
      }

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const optionsLinksMobile = [
    {
      label: 'Home',
      action: () => Router.push('/')
    }
  ]

  const optionsLinks = [
    {
      label: 'Home',
      action: () => Router.push('/')
    }
  ]

  const optionsButtons = !validade
    ? [
        {
          label: 'Criar conta',
          action: goToLogin
        }
      ]
    : [
        {
          label: 'Entrar na Feirinha',
          action: goToProducts
        }
      ]

  return (
    <div>
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
      <Footer />
    </div>
  )
}

export default ResetarSenha

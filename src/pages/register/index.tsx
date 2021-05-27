/* eslint-disable no-use-before-define */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import searchCep from 'cep-promise'
import * as S from '../../styles/register/styles'
import { postClientes } from '../../api/Clientes'
import { isEmail, validarCPF } from '../../Utils/Validation'
import { cepMask, cellphoneeMask, cpfMask } from '../../Utils/Masks'
import ValidadeContext from '../../contexts/validade'
import Footer from '../../components/Footer'

export type ProfileProps = {
  name: string
  cpf: string
  phone: string
  email: string
  cep: string
  neighborhood: string
  street: string
  number: string
  complement?: string
  ref?: string
}

const Profile = () => {
  const Router = useRouter()
  const { validade } = useContext(ValidadeContext)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [cep, setCep] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')

  useEffect(() => {
    if (cep) {
      setCep(cepMask(cep))
      if (cep.length === 9) {
        searchCep(cep.replace(/\D/g, '')).then(setValuesCep).catch(errorCep)
      }
    }

    function errorCep() {
      toast.warn('CEP não encontrado!')
    }
    // eslint-disable-next-line 
    function setValuesCep(data: any) {
      console.log(data)
      setEstado(data.state)
      setCidade(data.city)
      setNeighborhood(data.neighborhood)
      setStreet(data.street)
    }
  }, [cep])

  const register = async () => {
    try {
      if (!validarCPF(cpf)) {
        toast.warn('CPF Inválido')
        return
      }

      if (!isEmail(email)) {
        toast.warn('Email Inválido')
        return
      }

      if (!isEmail(email)) {
        toast.warn('Email Inválido')
        return
      }

      if (password !== confirmPassword) {
        toast.warn('As senhas não coincidem')
        return
      }

      if (password.length < 6) {
        toast.warn('As senhas não coincidem')
        return
      }
      await postClientes({
        bairro: neighborhood,
        cep: cep.replace(/\D/g, ''),
        cidade,
        cpf: cpf.replace(/\D/g, ''),
        email,
        estado,
        logradouro: street,
        nome: name,
        numero: number,
        password,
        telefone: phone.replace(/\D/g, '')
      })
      toast.success('Cadastro realizado com sucesso.', { autoClose: 6000 })
      Router.push('/login')
    } catch (error) {
      const { status } = error.response
      switch (status) {
        case 400:
          toast.warn('Email já cadastrado.')
          break
        case 401:
          toast.warn('CPF já cadastrado.')
          break
        default:
          toast.error('Algo de errado ocorreu ao tentar criar sua conta.', {
            autoClose: 8000
          })
          break
      }
      console.log({ error })
    }
  }

  const goToProducts = () => {
    Router.push('/products')
  }

  const goToLogin = () => {
    Router.push('/login')
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
    <S.Wrapper>
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
      <S.Body>
        <S.WrapperController>
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
          <S.Button onClick={() => Router.push('/login')}>
            Já tenho conta
          </S.Button>
          <S.Button onClick={() => register()}>Finalizar</S.Button>
        </S.WrapperButtons>
      </S.Body>

      <Footer />
    </S.Wrapper>
  )
}

export default Profile

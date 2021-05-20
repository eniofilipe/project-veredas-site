import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { getLogin } from '../api/Login'
import { ClienteLogin, Login, Address } from '../types'

interface IAuthContext {
  signed: boolean
  cliente: ClienteLogin | null
  endereco: Address | null
  getCliente: () => ClienteLogin
  signIn: (data: Login) => Promise<404 | 200 | 403>
  signOut: () => void
  getAddress: () => Address
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()

  let clientJSON = null
  let tokenJSON = null
  let enderecoJSON = null
  if (process.browser) {
    clientJSON = localStorage.getItem('cliente')
    tokenJSON = localStorage.getItem('token')
    enderecoJSON = localStorage.getItem('endereco')
  }

  const [cliente, setCliente] = useState<ClienteLogin | null>(
    process.browser ? clientJSON !== null && JSON.parse(clientJSON) : null
  )
  const [endereco, setEndereco] = useState<Address | null>(
    process.browser ? enderecoJSON : null
  )
  const [token, setToken] = useState<string | null>(
    process.browser ? tokenJSON : null
  )

  const signIn = async (data: Login) => {
    localStorage.removeItem('endereco')
    localStorage.removeItem('token')
    localStorage.removeItem('cliente')
    try {
      const response = await getLogin({
        email: data.email,
        password: data.password
      })
      if (response.data.option !== 'cliente') {
        return 403
      }
      setEndereco(response.data.endereco)
      setToken(response.data.token)
      setCliente(response.data.client)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('endereco', JSON.stringify(response.data.endereco))
      localStorage.setItem('cliente', JSON.stringify(response.data.client))
      Cookie.set('token', response.data.token)
      Cookie.set('cliente', JSON.stringify(response.data.client))
      Cookie.set('endereco', response.data.endereco)
      router.push('/products')
      return 200
    } catch (error) {
      console.log(error)
      return 404
    }
  }

  function signOut() {
    setCliente(null)
    setToken(null)
    Cookie.remove('token')
    Cookie.remove('cliente')
    Cookie.remove('endereco')
    localStorage.clear()
    router.push('/')
  }

  function getAddress() {
    return Cookie.getJSON('endereco')
  }
  function getCliente() {
    return Cookie.getJSON('cliente')
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!cliente,
        cliente,
        endereco,
        signIn,
        signOut,
        getAddress,
        getCliente
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

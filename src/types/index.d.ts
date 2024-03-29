/* eslint-disable camelcase */
export interface Categoria {
  id: number
  nome: string
  isvalid: boolean
}

export interface PostCategoriaProps {
  nome: string
}

export interface PutCategoriaProps {
  categoria_id: number
  isvalid: boolean
}

export interface Imagem {
  url: string
  path: string
  id: number
}

export interface Produto {
  id: number
  nome: string
  descricao: string
  quantidade: number
  categorias: Categoria[]
  imagem: Imagem
}

export interface ResponseProduto {
  produtos: Produto[]
}

export interface PostProdutoProps {
  nome: string
  descricao: string
  imagem_id: number
  categorias: number[]
}

export interface Cliente {
  id: number
  nome: string
  email: string
  cpf: string
  telefone: string
  enderecos: {
    id: number
    cep: string
    estado: string
    cidade: string
    bairro: string
    logradouro: string
    numero: string
    complemento?: string
    referencia?: string
  }
}

export interface PostClienteProps {
  nome: string
  email: string
  cpf: string
  telefone: string
  password: string
  cep: string
  estado: string
  cidade: string
  bairro: string
  logradouro: string
  numero: string
}

export interface PutClienteProps {
  nome?: string
  email?: string
  cpf?: string
  telefone?: string
  password?: string
  cep?: string
  estado?: string
  cidade?: string
  bairro?: string
  logradouro?: string
  numero?: string
  oldPassword?: string
  complemento?: string
  referencia?: string
}

export interface ClienteLogin {
  id: number
  nome: string
  email: string
}

export interface Login {
  email: string
  password: string
}
export interface Validade {
  id: number
  validade: string
  status: string
}

export interface PutValidadeProps {
  validade_id: number
  status: string
  validade: string
}

export interface PostValidadeProps {
  validade: string
}

export interface Oferta {
  id: number
  quantidade: number
  valor_unitario: number
  produtos: Produto
  validade: Validade
}

export interface PostOfertaProps {
  produto_id: number
  quantidade: number
  valor_unitario: number
  validade_oferta_id: number
}

export interface OfertaPedido {
  oferta_id: number
  quantidade: number
}

export interface PostPedidoProps {
  ofertas: OfertaPedido[]
  cliente_id: number
  tipo_pagamento_id: number
  valor_frete: number
  tipo_frete_id: number
}
export interface GetStatusLojaProps {
  success: string
}

export interface ResponseValidaToken {
  option: string
  id: number
  nome: string
  email: string
}

export interface PostRecuperarSenhaProps {
  email: string
}

export interface ResponseRecuperarSenha {
  ok: boolean
}

export interface PostResetarSenhaProps {
  password: string
  token: string | string[]
}

export interface Product {
  product: string
  quantity: number
  value: number
}

export interface Address {
  street: string
  number: string
  neighborhood: string
  cep: string
  complement?: string
  city: string
}

export interface LoginResponse {
  option: string
  client: ClienteLogin
  token: string
  endereco: Address
}
export interface CartProps {
  address: Address
  frete: number
  tipoPagamento: string[]
}

export interface PedidosProps {
  id: number
  status: string
  createdAt: string
  // tipo_pagamento_id: number;
  // tipo_frete_id: number;
  ofertas: {
    id: number
    valor_unitario: number
    // validade_oferta_id: number;
    produtos: {
      id: number
      nome: string
      // descricao: string;
      // imagem_id: number;
      // imagem: {
      //   url: string;
      //   path: string;
      // };
    }
    oferta_pedidos: {
      quantidade: number
    }
  }[]
  frete: {
    id: number
    valor_frete: number
  }
  subtotal: number
  total: number
}

export interface Pagamento {
  id: number
  titulo: string
  updatedAt: string
}

export interface Frete {
  id: number
  nome: string
  valor_frete: number
  createdAt: string
  updatedAt: string
}

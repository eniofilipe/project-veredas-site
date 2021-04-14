/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Cart as CartIcon,
  User as ProfileIcon,
  SearchAlt2 as SearchIcon,
} from '@styled-icons/boxicons-regular';

import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CardProduct from '../../components/Cards/CardProduct';

import { Categoria, Oferta } from '../../types';

import CartContext from '../../contexts/cart';
import { getCategorias } from '../../api/Categorias';
import { getProdutosOfertas } from '../../api/Ofertas';

const products = () => {
  const Router = useRouter();
  const { addProduct } = useContext(CartContext);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtosOferta, setProdutosOferta] = useState<Oferta[]>([]);
  const [quantidade, setQuantidade] = useState<number[]>([1]);

  const aumentarQuantidade = (index: number) => {
    const temp = quantidade;

    console.log(temp);
    if (!temp[index]) {
      temp[index] = 1;
    }
    temp[index] += 1;
    setQuantidade([...temp]);
    console.log(quantidade);
  };
  const diminuirQuantidade = (index: number) => {
    const temp = quantidade;
    if (!temp[index]) {
      temp[index] = 1;
    }
    if (temp[index] !== 1) {
      temp[index] -= 1;
      setQuantidade([...temp]);
    }
  };
  const fetchCategorias = async () => {
    try {
      const response = await getCategorias();

      setCategorias(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProdutos = async () => {
    try {
      const response = await getProdutosOfertas();

      setProdutosOferta(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategorias();
    fetchProdutos();
  }, []);

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.HeaderWrapper>
          <S.Header>
            <S.Logo src={veredaslogo} alt="" />
            <S.SearchBar placeholder="Buscar" />
            <S.MenuNav>
              <S.WrapperIcons>
                <S.Icon>
                  <CartIcon onClick={() => Router.push('/cart')} />
                </S.Icon>
                <S.Icon>
                  <ProfileIcon onClick={() => Router.push('profile')} />
                </S.Icon>
              </S.WrapperIcons>
            </S.MenuNav>
          </S.Header>
        </S.HeaderWrapper>
        <S.WrapperContent>
          <S.WrapperCategory>
            <div>
              <S.Checkbox
                type="checkbox"
                id="todos"
                name="todos"
                defaultChecked
              />
              <S.Label>Todos</S.Label>
            </div>
            {categorias &&
              categorias.map((cat) => (
                <div key={`${cat.id}`}>
                  <S.Checkbox
                    type="checkbox"
                    id={`${cat.id}`}
                    name={cat.nome}
                  />
                  <S.Label>{cat.nome}</S.Label>
                </div>
              ))}
          </S.WrapperCategory>
          <S.WrapperProduct>
            {produtosOferta.map((prod, index) => (
              <CardProduct
                key={`${prod.id}`}
                category={prod.produtos.categorias.map((cat) => cat.nome)}
                comment={prod.produtos.descricao}
                name={prod.produtos.nome}
                value={prod.valor_unitario}
                quantity={quantidade[index] ? quantidade[index] : 1}
                onChange={() => addProduct(prod, quantidade[index] ? quantidade[index] : 1)
                }
                PlusQuantityOnChange={() => aumentarQuantidade(index)}
                MinusQuantityOnChange={() => diminuirQuantidade(index)}
                image={prod.produtos.imagem.url}
              />
            ))}
          </S.WrapperProduct>
        </S.WrapperContent>
      </body>
    </S.Wrapper>
  );
};

export default products;

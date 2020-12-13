/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Cart as CartIcon,
  User as ProfileIcon,
  SearchAlt2 as SearchIcon,
} from '@styled-icons/boxicons-regular';

import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CardProduct from '../../components/Cards/CardProduct';

import { Categoria, Oferta } from '../../types';

import { getCategorias } from '../../api/Categorias';
import { getProdutosOfertas } from '../../api/Ofertas';

const products = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtosOferta, setProdutosOferta] = useState<Oferta[]>([]);

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
        <S.Header>
          <S.Logo src={veredaslogo} alt="" />
          <S.SearchBar placeholder="Buscar" />
          <S.WrapperIcons>
            <S.Icon>
              <CartIcon />
            </S.Icon>
            <S.Icon>
              <ProfileIcon />
            </S.Icon>
          </S.WrapperIcons>
        </S.Header>
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
            {produtosOferta.map((prod) => (
              <CardProduct
                key={`${prod.id}`}
                category={prod.produtos.categorias.map((cat) => cat.nome)}
                comment={prod.produtos.descricao}
                name={prod.produtos.nome}
                value={prod.valor_unitario}
                onChange={() => console.log('cliquei')}
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

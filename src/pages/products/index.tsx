/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

import { Checkbox } from '@material-ui/core';
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

  function produtoPossui(prod: Oferta) {
    let categoriasP;
    let tem = false;

    categoriasP = categorias.filter((elem, index) => elem.isvalid === true);
    categoriasP = categoriasP.map((elem) => elem.nome);
    prod.produtos.categorias.forEach((el) => {
      categoriasP.forEach((xxx) => {
        if (xxx === el.nome) {
          tem = true;
        }
      });
    });

    return tem;
  }
  const aumentarQuantidade = (index: number) => {
    const temp = quantidade;
    if (!temp[index]) {
      temp[index] = 1;
    }
    temp[index] += 1;
    setQuantidade([...temp]);
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

      setCategorias([
        { id: -1, nome: 'Todos', isvalid: true },
        ...response.data,
      ]);
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

  function removeElement(array, elem) {
    const index2 = array.indexOf(elem);
    if (index2 > -1) {
      array.splice(index2, 1);
    }
  }

  const handleChange = (e: any, categoryName: string) => {
    const { checked } = e.target;

    if (categoryName === 'Todos') {
      // todo
      const states = [...categorias];
      states.forEach((s) => {
        // eslint-disable-next-line no-param-reassign
        s.isvalid = checked;
      });
      setCategorias(states);
    } else {
      const states = [...categorias];

      // eslint-disable-next-line no-multiple-empty-lines

      const indexOfCheckBox = categorias.findIndex(
        (el) => el.nome === categoryName,
      );

      if (indexOfCheckBox !== -1) {
        states[indexOfCheckBox].isvalid = checked;
      }

      setCategorias(states);
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
            {categorias &&
              categorias.map((cat, index) => (
                <div key={`${cat.id}`}>
                  <Checkbox
                    key={`${cat.id}`}
                    onChange={(e) => handleChange(e, cat.nome)}
                    checked={!!categorias[index].isvalid}
                    type="checkbox"
                    id={`${cat.id}`}
                    name={cat.nome}
                    label={cat.nome}
                  />{' '}
                  {cat.nome}
                </div>
              ))}
          </S.WrapperCategory>
          <S.WrapperProduct>
            {produtosOferta.filter(produtoPossui).map((prod, index) => (
              <CardProduct
                key={`${prod.id}`}
                category={prod.produtos.categorias.map((cat) => cat.nome)}
                comment={prod.produtos.descricao}
                name={prod.produtos.nome}
                value={prod.valor_unitario}
                quantity={quantidade[index] ? quantidade[index] : 1}
                onChange={() =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  addProduct(prod, quantidade[index] ? quantidade[index] : 1)
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

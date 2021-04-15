/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  Fragment, useState, useEffect, useContext,
} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Cart as CartIcon,
  User as ProfileIcon,
  SearchAlt2 as SearchIcon,
} from '@styled-icons/boxicons-regular';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CardProduct from '../../components/Cards/CardProduct';

import { Categoria, Oferta } from '../../types';

import CartContext from '../../contexts/cart';
import { getCategorias } from '../../api/Categorias';
import { getProdutosOfertas } from '../../api/Ofertas';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const products = () => {
  const Router = useRouter();
  const { addProduct } = useContext(CartContext);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtosOferta, setProdutosOferta] = useState<Oferta[]>([]); // Estático
  const [produtosOfertaAux, setProdutosOfertaAux] = useState<Oferta[]>([]);
  const [quantidade, setQuantidade] = useState<number[]>([1]);
  const classes = useStyles();

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
      setProdutosOfertaAux(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [state, setState] = React.useState([]);

  const handleChange = (name: string, value: number) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setState({ ...state, [name]: event.target.checked });

    if (value === -1) {
      setProdutosOfertaAux(produtosOferta);
    } else {
      const aux = produtosOferta.map((prod) => (prod.produtos.categorias.filter((cat) => cat.id === value)));
      const list = produtosOferta;

      for (let i = 0; i < aux.length; i++) {
        if (aux[i].length === 0) {
          list[i].id = -2;
        }
      }

      setProdutosOfertaAux([...list]);
      console.log(produtosOfertaAux);
    }
  };

  const { aux } = state;

  useEffect(() => {
    fetchCategorias();
    fetchProdutos();
  }, [produtosOfertaAux]);

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
            <div className={classes.root}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={aux}
                        onChange={handleChange('todos', -1)}
                        value="todos"
                      />
                    }
                    label="Todos"
                  />
                  {categorias &&
                    categorias.map((cat) => (
                      <div key={`${cat.id}`}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={aux}
                              onChange={handleChange('diversos', cat.id)}
                              value="diversos"
                            />
                          }
                          label={cat.nome}
                        />
                      </div>
                    ))}
                </FormGroup>
              </FormControl>
            </div>
          </S.WrapperCategory>
          <S.WrapperProduct>
            {produtosOferta && produtosOferta.map((prod, index) => (
              produtosOferta[index].id !== -2 ?
              // <div key={`${prod.id}`}>
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
                //  </div>
                : ''
            ))}
          </S.WrapperProduct>
        </S.WrapperContent>
      </body>
    </S.Wrapper>
  );
};

export default products;

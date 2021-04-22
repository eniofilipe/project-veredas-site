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

import { Checkbox,TextField  } from '@material-ui/core';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';


import { GetServerSideProps } from 'next';

import { toast } from 'react-toastify';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';

import ValidadeContext from '../../contexts/validade';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';
import CardProduct from '../../components/Cards/CardProduct';

import { Categoria, Oferta } from '../../types';

import CartContext from '../../contexts/cart';
import { getCategorias } from '../../api/Categorias';
import { getProdutosOfertas } from '../../api/Ofertas';
import { getOpened, getOpenedWithoutToken } from '../../api/Validade';

const products = () => {
  const Router = useRouter();
  const {
 addProduct, removeProduct, checkInCart, getCartLenght, } = useContext(
    CartContext,
  );
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtosOferta, setProdutosOferta] = useState<Oferta[]>([]);
  const [quantidade, setQuantidade] = useState<number[]>([1]);
  const [searchBoxBeingUsed, setSearchBoxBeingUsed] = useState<boolean>(false)
  const [searchedName, setSearchedName] = useState<string>('')



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
        { id: -1, nome: 'Todas', isvalid: true },
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

  const handleChangeSearchBar = (e: any) => {
    setSearchBoxBeingUsed(true)
    setSearchedName(e.target.innerHTML);
    console.log(e.target.innerHTML);
     let cat = [...categorias];
    cat.forEach((elem) => {
      elem.isvalid = false
    })
    setCategorias(cat)
    console.log(categorias)
  }
  const handleChange = (e: any, categoryName: string) => {
    setSearchBoxBeingUsed(false)
    const { checked } = e.target;

    if (categoryName === 'Todas') {
      const states = [...categorias];
      states.forEach((s) => {
        s.isvalid = checked;
      });
      setCategorias(states);
    } else {
      const states = [...categorias];

      const indexOfCheckBox = categorias.findIndex(
        (el) => el.nome === categoryName
      );

      if (indexOfCheckBox !== -1) {
        states[indexOfCheckBox].isvalid = checked;
      }

      setCategorias(states);
    }

    if(categorias[0].isvalid){
      let allMarked = true;
      const states = [...categorias];
      states.forEach((s) => {
        if(!s.isvalid)
        allMarked = false
      });
      if(!allMarked){
        states[0].isvalid = false;
        setCategorias(states);
      }
    }
    else if(!categorias[0].isvalid){
      let allMarked = true;
      const states = [...categorias];
      states.forEach((s) => {
        if(!s.isvalid){
          if(s.nome!== 'Todas')
            allMarked = false
        }
      });
      if(allMarked){
        console.log('alguem desmarcado')
        states[0].isvalid = true;
        setCategorias(states);
      }
    }

  };

  useEffect(() => {
    fetchCategorias();
    fetchProdutos();
  }, []);

  function handleGoCart() {
    if (getCartLenght() > 0) {
      Router.push('/cart');
      return;
    }
    toast.warn('Carrinho Vazio');
  }

  const filterOptions = createFilterOptions({
    limit: null
  }
  );

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.HeaderWrapper>
          <S.Header>
            <S.Logo src={veredaslogo} alt="" />
            <div style={{ width: 800 }}>
              <Autocomplete
                id="searchBar"
                freeSolo
                options={produtosOferta.map((option) => option.produtos.nome)}
                renderInput={(params) => (
                  <TextField {...params} label="Pesquisar pelo nome" margin="normal" variant="outlined" InputProps={{ ...params.InputProps ,type: 'search' }} />

                )}
                onChange = {(e) => handleChangeSearchBar(e)}
                filterOptions={filterOptions}
              />
            </div>
            <S.MenuNav>
              <S.WrapperIcons>
                <S.Icon>
                  <span>{getCartLenght()}</span>
                  <CartIcon onClick={() => handleGoCart()} />
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
            <S.HeadCategory>Categorias</S.HeadCategory>
            {categorias &&
              categorias.map((cat, index) => (
                <S.DivCategory key={cat.id}>
                  <Checkbox
                    key={`${cat.id}`}
                    onChange={(e) => handleChange(e, cat.nome)}
                    checked={!!categorias[index].isvalid}
                    id={`${cat.id}`}
                    name={cat.nome}
                    color="default"
                  />{' '}
                  {cat.nome}
                </S.DivCategory>
              ))}
          </S.WrapperCategory>
          <S.WrapperProduct>
            { !searchBoxBeingUsed?
            produtosOferta.filter(produtoPossui).map((prod, index) => (
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
                handleRemove={() => removeProduct(prod)}
                PlusQuantityOnChange={() => aumentarQuantidade(index)}
                MinusQuantityOnChange={() => diminuirQuantidade(index)}
                image={prod.produtos.imagem.url}
                inCart={checkInCart(prod)}
              />
            )):

            (

              produtosOferta.map((prod, index) => (
                prod.produtos.nome.toUpperCase().includes(searchedName.toUpperCase())   ?
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
                  handleRemove={() => removeProduct(prod)}
                  PlusQuantityOnChange={() => aumentarQuantidade(index)}
                  MinusQuantityOnChange={() => diminuirQuantidade(index)}
                  image={prod.produtos.imagem.url}
                  inCart={checkInCart(prod)}
                />
                : ''
              ))



            )


            }
          </S.WrapperProduct>
        </S.WrapperContent>
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
      </body>
    </S.Wrapper>
  );
};

export default products;

export const getServerSideProps: GetServerSideProps = async ({}) => {
  let validade = false;

  try {
    const response = await getOpenedWithoutToken();
    if (response.data.success === 'aberta') validade = true;
  } catch (error) {
    console.log(error);
  }

  if (!validade) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

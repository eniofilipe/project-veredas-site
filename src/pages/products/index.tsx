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
  // SearchAlt2 as SearchIcon,
} from '@styled-icons/boxicons-regular';
import Footer from '../../components/Footer';

import { Checkbox,TextField, CheckboxProps } from '@material-ui/core';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

import { GetServerSideProps } from 'next';

import { toast } from 'react-toastify';
import * as S from '../../styles/products/styles';
import veredaslogo from '../../assets/images/logo.png';

import CardProduct from '../../components/Cards/CardProduct';
// import produtoimagem from '../../assets/images/produto.png';
// import logomst from '../../assets/images/logo-mst-rurais.png';
// import logoif from '../../assets/images/logo-if.png';

import { Categoria, Oferta } from '../../types';

import CartContext from '../../contexts/cart';
import { getCategorias } from '../../api/Categorias';
import { getProdutosOfertas } from '../../api/Ofertas';
import { getOpenedWithoutToken } from '../../api/Validade';

import styled from 'styled-components';

  const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #552200;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #ccc;
    }
    &:hover fieldset {
      border-color: #552200;
    }
    &.Mui-focused fieldset {
      border-color: #552200;
    }
  }
`;

const GreenCheckbox = withStyles({
  root: {
    color: '#017C00',
    '&$checked': {
      color: '#017C00',
    },
  },
  checked: {},
  FormControlLabel:{
    color: 'blue'
  }
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);


const CustomCartIcon = styled(CartIcon)`
  color: #552200;
`

const CustomProfileIcon= styled(ProfileIcon)`
  color: #552200;
`

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
  const aumentarQuantidade = (index: number, maxQuantity: number) => {
    if(quantidade[index]+1 > maxQuantity){
      return;
    }
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
        <S.HeaderWrapper>
          <S.Header>
            <S.Logo src={veredaslogo} alt="Home" onClick={() => Router.push('/')}/>
            <div style={{ width: 800 }}>
              <Autocomplete
                id="searchBar"
                freeSolo
                options={produtosOferta.map((option) => option.produtos.nome)}
                renderInput={(params) => (
                  <StyledTextField {...{...params,size: 'small'}} label="Pesquisar pelo nome" margin="normal" variant="outlined" InputProps={{ ...params.InputProps }} />
                )}
                onChange = {(e) => handleChangeSearchBar(e)}
                filterOptions={filterOptions}
              />
            </div>
            <S.MenuNav>
              <S.WrapperIcons>
                <S.Icon>
                  <span>{getCartLenght()}</span>
                  <CustomCartIcon onClick={() => handleGoCart()} />
                </S.Icon>
                <S.Icon>
                  <CustomProfileIcon onClick={() => Router.push('profile')} />
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
                  <GreenCheckbox
                    key={`${cat.id}`}
                    onChange={(e) => handleChange(e, cat.nome)}
                    checked={!!categorias[index].isvalid}
                    id={`${cat.id}`}
                    name={cat.nome}
                  />{' '}
                  <span style={{color: '#552200'}}>{cat.nome}</span>
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
                availableStock={prod.quantidade}
                quantity={quantidade[index] ? quantidade[index] : 1}
                onChange={() =>
                  addProduct(prod, quantidade[index] ? quantidade[index] : 1)
                }
                handleRemove={() => removeProduct(prod)}
                PlusQuantityOnChange={() => aumentarQuantidade(index,prod.quantidade)}
                MinusQuantityOnChange={() => diminuirQuantidade(index)}
                // image={prod.produtos.imagem === null ? produtoimagem : prod.produtos.imagem.url}
                image={prod.produtos.imagem === null ? null : prod.produtos.imagem.url}
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
                  availableStock={prod.quantidade}
                  quantity={quantidade[index] ? quantidade[index] : 1}
                  onChange={() =>
                    addProduct(prod, quantidade[index] ? quantidade[index] : 1)
                  }
                  handleRemove={() => removeProduct(prod)}
                  PlusQuantityOnChange={() => aumentarQuantidade(index,prod.quantidade)}
                  MinusQuantityOnChange={() => diminuirQuantidade(index)}
                  // image={prod.produtos.imagem === null ? produtoimagem : prod.produtos.imagem.url}
                  image={prod.produtos.imagem === null ? null : prod.produtos.imagem.url}
                  inCart={checkInCart(prod)}
                />
                : ''
              ))
            )
            }
          </S.WrapperProduct>
        </S.WrapperContent>
      <Footer/>
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

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';
import {
  Cart as CartIcon,
  User as ProfileIcon,
  SearchAlt2 as SearchIcon,
} from '@styled-icons/boxicons-regular';

import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import CardProduct from '../../components/Cards/CardProduct';

const categorias = ['Laticinios', 'Grãos', 'Outros'];

const products = () => (
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
              <div>
                <S.Checkbox type="checkbox" id={cat} name={cat} />
                <S.Label>{cat}</S.Label>
              </div>
            ))}
        </S.WrapperCategory>
        <S.WrapperProduct>
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
          <CardProduct
            category={['Categorias', 'Subcategorias']}
            comment="Pacotes de 300g de alface"
            name="Alface"
            value={3.8}
            onChange={() => console.log('cliquei')}
          />
        </S.WrapperProduct>
      </S.WrapperContent>
    </body>
  </S.Wrapper>
);

export default products;

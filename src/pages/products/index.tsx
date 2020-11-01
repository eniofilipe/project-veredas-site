import React from 'react';
import Head from 'next/head';

import { Header, Logo } from './styles';
import veredaslogo from '../../assets/logo.png';
import CardProduct from '../../components/Cards/CardProduct';

const products = () => (
  <div>
    <Head>
      <title>Veredas da terra</title>
    </Head>
    <body>
      <Header>
        <Logo src={veredaslogo} alt="" />
      </Header>
      <div>
        <CardProduct
          category={['Categorias', 'Subcategorias']}
          comment="Pacotes de 300g de alface"
          name="Alface"
          value={3.8}
          onChange={() => console.log('cliquei')}
        />
      </div>
    </body>
  </div>
);

export default products;

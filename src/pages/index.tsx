import React from 'react';
import Head from 'next/head';

import veredaslogo from '../assets/logo.png';

const Home = () => (
  <div>
    <Head>
      <title>Veredas da terra</title>
    </Head>

    <main>
      <img src={veredaslogo} alt="" />
      <h1>Olá, bem vindo à nossa cesta!</h1>
    </main>
  </div>
);

export default Home;

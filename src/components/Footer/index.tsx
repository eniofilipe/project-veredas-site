import React, { ReactChildren, useState } from 'react';
import veredaslogo from '../../assets/images/logo.png';
import logomst from '../../assets/images/logo-mst-rurais.png';
import logoif from '../../assets/images/logo-if.png';
import * as S from '../Footer/styles';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Footer = () => {
  const Router = useRouter();
  return (
    <S.WrapperFooter>
    <div id='footer-responsive'>
    <div id='contato'>
      <h1 id='contato-info'>Contato</h1>
      <p>contato@veredasdaterra.com.br</p>
      <p>(38) 9 9900-0000</p>
    </div>

    <div id='info'>
      <h1 id='title-info'>Informações</h1>
      <p>Cooperativa Camponesa - Veredas da Terra</p>
      <p>CNPJ: 10.286.881/0001-02</p>
      <p>Entregas realizadas somente na cidade de Montes Claros/MG.</p>
    </div>
    </div>
    <div id='logo'>
      <S.Logo
        src={veredaslogo}
        alt="Logo da cooperativa Veredas da Terra"
      />
      <S.Logo src={logomst} alt="Logo do MST" />
      <S.Logo src={logoif} alt="Logo do IFNMG" onClick={() => Router.push('/if')}/>
    </div>

  </S.WrapperFooter>
  )
};

export default Footer;

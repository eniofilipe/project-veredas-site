/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import * as S from '../../styles/if/styles';
import ValidadeContext from '../../contexts/validade';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, Card, CardContent, CardMedia,Typography } from "@material-ui/core";
import Footer from '../../components/Footer';
import veredaslogo from '../../assets/images/logo.png';
import logomst from '../../assets/images/logo-mst-rurais.png';
import logoif from '../../assets/images/logo-if.png';

import deise from '../../assets/desenvolvedores/deise.jpg';
import jefeson from '../../assets/desenvolvedores/jefeson.jpg';
import joao from '../../assets/desenvolvedores/joao.jpg';
import enio from '../../assets/desenvolvedores/enio.jpg';



const Home = () => {
  const Router = useRouter();

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={veredaslogo} alt="Home" onClick={() => Router.push('/')} />
        <S.TitlePage>Desenvolvedores</S.TitlePage>
        <S.MenuNav>
          <S.MenuLink onClick={() => Router.push('/')}>
            Perfil
          </S.MenuLink>
        </S.MenuNav>
      </S.Header>
        <S.WrapperBody>

          <div className="card">
            <div id="img">
              <img src={logomst} alt=""/>
            </div>
            <div className="info">
              <h1>Instituto Federal do Norte de Minas Gerais</h1>
              <a href="http://">Página Oficial</a>
              <a href="http://">Ciência da Computação</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={logomst} alt=""/>
            </div>
            <div className="info">
              <h1>Lúcio</h1>
              {/* <a href="http://">Link 1</a>
              <a href="http://">Link 2</a> */}
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={enio} alt=""/>
            </div>
            <div className="info">
              <h1>Ênio</h1>
              <a href="http://">LinkedIn</a>
              <a href="http://">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={joao} alt=""/>
            </div>
            <div className="info">
              <h1>João Kevin</h1>
              <a href="http://">LinkedIn</a>
              <a href="http://">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={jefeson} alt=""/>
            </div>
            <div className="info">
              <h1>Jefeson</h1>
              <a href="http://">LinkedIn</a>
              <a href="http://">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={deise} alt=""/>
            </div>
            <div className="info">
              <h1>Deise</h1>
              <a href="http://">LinkedIn</a>
              <a href="http://">GitHub</a>
            </div>
          </div>


        </S.WrapperBody>
       <Footer/>
    </S.Wrapper>
  );
};

export default Home;

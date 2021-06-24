/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Link, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import * as S from '../../styles/if/styles';
import ValidadeContext from '../../contexts/validade';
import Footer from '../../components/Footer';
import veredaslogo from '../../assets/images/logo.png';
import logomst from '../../assets/images/logo-mst-rurais.png';
import logoifnovo from '../../assets/images/if.png';

import deise from '../../assets/desenvolvedores/deise.jpg';
import jefeson from '../../assets/desenvolvedores/jefeson.jpg';
import joao from '../../assets/desenvolvedores/joao.jpg';
import enio from '../../assets/desenvolvedores/enio.jpg';
import lucio from '../../assets/desenvolvedores/lucio.jpg';

const Home = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const optionsLinksMobile = [
    {
      label: 'Perfil',
      action: () => Router.push('profile'),
    },
  ];

  const optionsLinks = [
    {
      label: 'Perfil',
      action: () => Router.push('/profile'),
    },
  ];

  return (
    <S.Wrapper>
     <S.StyledHeader
          buttons={[]}
          buttonsMenulFull={[]}
          handleSandwich={(open) => setIsOpen(open)}
          links={optionsLinks}
          linksMenuFull={optionsLinksMobile}
          openMenuFull={isOpen}
          title="Desenvolvedores"
        />
        <S.WrapperBody>
          <div className="card">
            <div id="img">
              <img src={logoifnovo} alt=""/>
            </div>
            <div className="info">
              <h1>IFNMG</h1>
              <h1 id="campus">Campus Montes Claros</h1>
              <a href="https://www.ifnmg.edu.br/montesclaros">Página Oficial</a>
              <a href="https://www.ifnmg.edu.br/cursos/38-portal/montes-claros/montes-claros-cursos/3378-curso-de-bacharelado-em-ciencia-da-computacao">Ciência da Computação</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={lucio} alt=""/>
            </div>
            <div className="info">
              <h1>Lúcio</h1>
              <a href="http://lattes.cnpq.br/2669267422941392">Lattes</a>
              <a href="http://">Link 2</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={enio} alt=""/>
            </div>
            <div className="info">
              <h1>Ênio</h1>
              <a href="https://www.linkedin.com/in/eniofilipe/">LinkedIn</a>
              <a href="https://github.com/eniofilipe">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={joao} alt=""/>
            </div>
            <div className="info">
              <h1>João Kevin</h1>
              <a href="https://www.linkedin.com/in/joao-kevin-gomes-rodrigues/">LinkedIn</a>
              <a href="https://github.com/JkevinX23">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={jefeson} alt=""/>
            </div>
            <div className="info">
              <h1>Jefeson</h1>
              <a href="https://www.linkedin.com/in/jefeson-martins-062a0b152/">LinkedIn</a>
              <a href="https://github.com/Jefesonk1">GitHub</a>
            </div>
          </div>

          <div className="card">
            <div id="img">
              <img src={deise} alt=""/>
            </div>
            <div className="info">
              <h1>Deise</h1>
              <a href="https://www.linkedin.com/in/deise-santana-503704158/">LinkedIn</a>
              <a href="https://github.com/deisesan">GitHub</a>
            </div>
          </div>
        </S.WrapperBody>
       <Footer/>
    </S.Wrapper>
  );
};

export default Home;

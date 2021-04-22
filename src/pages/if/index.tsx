/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';
import ValidadeContext from '../../contexts/validade';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, Card, CardContent, CardMedia,Typography } from "@material-ui/core";

import veredaslogo from '../../assets/logo.png';
import logomst from '../../assets/logo-mst-rurais.png';
import logoif from '../../assets/logo-if.png';

import deise from '../../assets/desenvolvedores/deise.jpg';
import jefeson from '../../assets/desenvolvedores/jefeson.jpg';
import joao from '../../assets/desenvolvedores/joao.jpg';
import enio from '../../assets/desenvolvedores/enio.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '200px',
      width: '600px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 200,
      height: 200,
    },
  }),
);

const Home = () => {
  const Router = useRouter();
  const { validade } = useContext(ValidadeContext);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();

  const classes = useStyles();

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={veredaslogo} alt="Home" onClick={() => Router.push('/')}/>
        <S.TitleDesenvolvedores>Desenvolvedores</S.TitleDesenvolvedores>
      </S.Header>
      <S.Body>
        <S.WrapperBody>
          <Card className={classes.root}>
            <CardMedia className={classes.cover}  image={logomst}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography align="center" component="h4" variant="h5">
                Instituto Federal do Norte de Minas Gerais
                </Typography>
                <br/>&ensp;
                <Link href="https://www.ifnmg.edu.br/montesclaros" color="inherit" variant="h6">
                Página Oficial
                </Link>
                <br/>&ensp;
                <Link href="https://www.ifnmg.edu.br/cursos/38-portal/montes-claros/montes-claros-cursos/3378-curso-de-bacharelado-em-ciencia-da-computacao" color="inherit" variant="h6">
                Ciência da Computação
                </Link>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.root}>
            <CardMedia className={classes.cover}  image={logomst}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <br/>
                <Typography component="h5" variant="h4">
                Lúcio
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.root}>
            <CardMedia className={classes.cover} image={enio}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <br/>
                <Typography component="h5" variant="h4">
                Ênio
                </Typography>
                <br/>
                <Link href="https://www.linkedin.com/in/eniofilipe/" color="inherit" variant="h6">
                LinkedIn
                </Link>
                <br/>
                <Link href="https://github.com/eniofilipe" color="inherit" variant="h6">
                GitHub
                </Link>
              </CardContent>
            </div>
          </Card>
        </S.WrapperBody>
        <S.WrapperBody>
          <Card className={classes.root}>
            <CardMedia className={classes.cover} image={joao}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <br/>
                <Typography component="h5" variant="h4">
                João Kevin
                </Typography>
                <br/>
                <Link href="https://www.linkedin.com/in/joao-kevin-gomes-rodrigues/" color="inherit" variant="h6">
                LinkedIn
                </Link>
                <br/>
                <Link href="https://github.com/JkevinX23" color="inherit" variant="h6">
                GitHub
                </Link>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.root}>
            <CardMedia className={classes.cover} image={jefeson}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <br/>
                <Typography component="h5" variant="h4">
                Jefeson
                </Typography>
                <br/>
                <Link href="https://www.linkedin.com/in/jefeson-martins-062a0b152/" color="inherit" variant="h6">
                LinkedIn
                </Link>
                <br/>
                <Link href="https://github.com/Jefesonk1" color="inherit" variant="h6">
                GitHub
                </Link>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.root}>
            <CardMedia className={classes.cover} image={deise}/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <br/>
                <Typography component="h5" variant="h4">
                Deise Santana
                </Typography>
                <br/>
                <Link href="https://www.linkedin.com/in/deise-santana-503704158/" color="inherit" variant="h6">
                LinkedIn
                </Link>
                <br/>
                <Link href="https://github.com/deisesan" color="inherit" variant="h6">
                GitHub
                </Link>
              </CardContent>
            </div>
          </Card>
        </S.WrapperBody>
        <S.WrapperFooter>
          <div>
            <p>Cooperativa Camponesa - Veredas da Terra</p>
            <p>CNPJ: 10.286.881/0001-02</p>
            <p>Entregas realizadas somente na cidade de Montes Claros/MG.</p>
          </div>
          <div>
            <p>Contato:</p>
            <p>contato@veredasdaterra.com.br</p>
            <p>+55 38 9 9900-0000</p>
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
      </S.Body>
    </S.Wrapper>
  );
};

export default Home;
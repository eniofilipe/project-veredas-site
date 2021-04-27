/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import veredaslogo from '../assets/logo.png';
import * as S from './styles';
import logomst from '../assets/logo-mst-rurais.png';
import logoif from '../assets/logo-if.png';
import imagecampo from '../assets/Campo-cidade.png';
import ValidadeContext from '../contexts/validade';

const Home = () => {
  const Router = useRouter();
  const { validade } = useContext(ValidadeContext);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();

  const sectionOneRef = useRef<null | HTMLDivElement>(null);
  const sectionTwoRef = useRef<null | HTMLDivElement>(null);
  const sectionThreeRef = useRef<null | HTMLDivElement>(null);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  const goToProducts = () => {
    router.push('/products');
  };

  const goToLogin = () => {
    router.push('/login');
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, []);
  function handleChange(newValue: string) {
    switch (newValue) {
      case 'sectionOneRef':
        sectionOneRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        return;
      case 'sectionTwoRef':
        sectionTwoRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
        return;
      case 'sectionThreeRef':
        sectionThreeRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        return;
      default:
        sectionOneRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
    }
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper position={scrollY}>
        <S.Header>
          {/* <S.Logo src={veredaslogo} alt="Home" onClick={() => Router.push('/')}/> */}
          <S.Logo src={veredaslogo} alt="Home" />
          <S.MenuNav>
            <S.MenuLink onClick={() => handleChange('sectionOneRef')}>
              Home
            </S.MenuLink>
            <S.MenuLink onClick={() => handleChange('sectionTwoRef')}>
              Quem somos
            </S.MenuLink>
            <S.MenuLink onClick={() => handleChange('sectionThreeRef')}>
              Como Funciona
            </S.MenuLink>
            {!validade ? (
              <S.Button onClick={goToLogin}>Acessar Conta</S.Button>
            ) : (
              <S.Button onClick={goToProducts}>Entrar na Feirinha</S.Button>
            )}
          </S.MenuNav>
        </S.Header>
      </S.HeaderWrapper>

      <S.HomeSectionWrapper ref={sectionOneRef}>
        <S.BGHome>
          <S.CentralizeWrapper>
            <p>BEM VINDO À CESTA AGROECOLOGICA</p>
            <p>
              Aqui nós oferecemos os alimentos orgânicos de melhor qualidade,{' '}
            </p>
            <p>
              direto do campo da agricultura familiar.
            </p>
            <S.Logo src={logomst} alt="Logo do MST" />
          </S.CentralizeWrapper>
        </S.BGHome>
      </S.HomeSectionWrapper>
      <S.WrapperSecondSection ref={sectionTwoRef}>
        <S.Card1>
          <p> Do campo à cidade</p>
          <p>
            A Cooperativa Camponesa Veredas da Terra produz produtos orgânicos,
              livres de agrotóxicos, trazendo mais segurança, saúde e qualidade de vida. <br />
              Tudo isso para que você no conforto da sua casa, receba os melhores produtos da região!
          </p>
        </S.Card1>
        <S.Card2>
          <S.Image src={imagecampo} />
        </S.Card2>
      </S.WrapperSecondSection>
      <S.WrapperThreeSection ref={sectionThreeRef}>
        <S.TextWrapper>
          <p>Como funciona? </p>
        </S.TextWrapper>
        <S.TextDivPrincipal>
          <S.TextDiv1>
          <p>&nbsp; Todos os produtos ofertados na semana estão na loja. </p>
          <p>&nbsp; Escolha o produto, a quantidade e adicione ao carrinho. </p>
          <p>&nbsp; Clique em finalizar o pedido. </p>
          <p> &nbsp; Informe seus dados corretamente. </p>
          </S.TextDiv1>
          <S.TextDiv2>
          <p>&nbsp; Pedidos: Segunda-Feira até Quarta-Feira. </p>
          <p>&nbsp; Entregas: A partir de Sexta-Feira. </p>
            {/* &nbsp; &nbsp; &nbsp; Alteração do pedido até as Quarta-Feira 23:59hrs. <p /> */}
            <p>&nbsp; Taxa de Entrega: R$ 5,00. </p>
            <p>&nbsp; Entraremos em contato caso ocorra algum imprevisto! </p>
          </S.TextDiv2>
          {/* <S.TextDiv3>
            Endereço: Assentamento Estrela do Norte, Estrada da Produção, Km 14,
            CEP: 39410-000, Zona Rural, Município de Montes Claros/MG CEP:
            39410-000.
          </S.TextDiv3> */}
        </S.TextDivPrincipal>
        {!validade ? (
          <S.ButtonSecond onClick={goToLogin}>Acessar Conta</S.ButtonSecond>
        ) : (
          <S.ButtonSecond onClick={goToProducts}>
            Entrar na Feirinha
          </S.ButtonSecond>
        )}
      </S.WrapperThreeSection>
      <S.WrapperFooter>

        <div id='contato'>
          <h1 id='contato-info'>Contato</h1>
          <p>email@veredasdaterra.com.br</p>
          <p>(38) 9 9900-0000</p>
        </div>

        <div id='info'>
          <h1 id='title-info'>Informações</h1>
          <p>Cooperativa Camponesa - Veredas da Terra</p>
          <p>CNPJ: 10.286.881/0001-02</p>
          <p>Entregas realizadas somente na cidade de Montes Claros/MG.</p>
        </div>

        <div id='logo'>
          <S.Logo
            src={veredaslogo}
            alt="Logo da cooperativa Veredas da Terra"
          />
          <S.Logo src={logomst} alt="Logo do MST" />
          <S.Logo src={logoif} alt="Logo do IFNMG" />
        </div>

      </S.WrapperFooter>
    </S.Wrapper>
  );
};

export default Home;

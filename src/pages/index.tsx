import {
 useEffect, useState, useRef, useContext
} from 'react';
import { useRouter } from 'next/router';
import veredaslogo from '../assets/logo.png';
import * as S from './styles';
import logomst from '../assets/logo-mst-rurais.png';
import logoif from '../assets/logo-if.png';
import imagecampo from '../assets/Campo-cidade.png';
import ValidadeContext from '../contexts/validade';

const Home = () => {
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
          <S.Logo src={veredaslogo} alt="" />
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
              <p />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus neque felis, sed fermentum metus tristique in. Phasellus
            imperdiet dui eu euismod tincidunt.
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
            As cestas agroecológicas são comercializadas em{' '}
            <b>Montes Claros (MG)</b>, na modalidade de <b>circuito curto</b>,
            isto é, do campo, direto para a casa do consumidor, num esquema de
            entrega porta a porta.
          </S.TextDiv1>
          <S.TextDiv2>
            Nossa loja online abre para realização de pedidos na Segunda-feira e
            costuma fechar para pedidos na Quinta-feira.
          </S.TextDiv2>
          <S.TextDiv3>
            Com o fechamento dos pedidos, iniciamos o processo de entrega dos
            produtos. Assim, você receberá nossos produtos agorcológicos no
            conforto de sua casa.
          </S.TextDiv3>
        </S.TextDivPrincipal>
      </S.WrapperThreeSection>

      <S.WrapperFooter>
        <div>
          <p>Cooperativa Camponesa - Veredas da Terra</p>
          <p>CNPJ: 10.286.881/0001-02</p>
        </div>
        <div>
          <p>Contato</p>
          <p>contato@veredasdaterra.com.br</p>
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
    </S.Wrapper>
  );
};

export default Home;

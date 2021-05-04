/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import veredaslogo from '../assets/images/logo.png';
import * as S from '../styles/styles';
import logomst from '../assets/images/logo-mst-rurais.png';
import imagecampo from '../assets/images/Campo-cidade.png';
import ValidadeContext from '../contexts/validade';
import Footer from '../components/Footer'
import { Menu as MenuIcon } from '@styled-icons/feather/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import Link from 'next/link'

const Home = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const { validade } = useContext(ValidadeContext);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();

  const sectionOneRef = useRef<null | HTMLDivElement>(null);
  const sectionTwoRef = useRef<null | HTMLDivElement>(null);
  const sectionThreeRef = useRef<null | HTMLDivElement>(null);

  function setRef(value: number) {
    switch (value) {
      case 1:
        if (router.pathname !== '/') {
          router.push('/')
        }
        !!handleChange && handleChange('sectionOneRef')
        return
      case 2:
        if (router.pathname !== '/') {
          router.push('/')
        }
        !!handleChange && handleChange('sectionTwoRef')
        return
      case 3:
        if (router.pathname !== '/') {
          router.push('/')
        }
        !!handleChange && handleChange('sectionThreeRef')
        return
    }
  }


  function mobileMenu(option: number) {
    setRef(option)
    setIsOpen(false)
  }

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
          block: 'end',

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

      <S.Sandwich>
      <S.Logo src={veredaslogo} alt="Home" />
        <S.IconWrapper >
          <MenuIcon onClick={() => setIsOpen(true)} aria-label="Open Menu" />
        </S.IconWrapper>
      </S.Sandwich>


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


      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink onClick={() => mobileMenu(1)}>Home</S.MenuLink>
          <S.MenuLink onClick={() => mobileMenu(2)}>Quem somos</S.MenuLink>
          <S.MenuLink onClick={() => mobileMenu(3)}>Como Funciona</S.MenuLink>
          {!validade ? (
             <Link href="/login">
              <S.Button>Acessar Conta</S.Button>
              </Link>
            ) : (
              <Link href="/products">
                <S.Button>Entrar na Feirinha</S.Button>
              </Link>
            )}
        </S.MenuNav>
      </S.MenuFull>
      </S.HeaderWrapper>

      <S.HomeSectionWrapper ref={sectionOneRef}>
        <S.BGHome>
          <S.CentralizeWrapper>
            <p>BEM VINDO À CESTA AGROECOLOGICA</p>
            <p>
              Aqui nós oferecemos os alimentos orgânicos de melhor qualidade,{' '}
            </p>
            <p>
              Direto do campo da agricultura familiar.
            </p>
            <S.Logo src={logomst} alt="Logo do MST" />
          </S.CentralizeWrapper>
        </S.BGHome>
      </S.HomeSectionWrapper>
      <S.WrapperSecondSection >
        <S.Card1>
          <p> Do campo à cidade</p>
          <p>

            A Cooperativa Camponesa Veredas da Terra produz produtos orgânicos,
              livres de agrotóxicos, trazendo mais segurança, saúde e qualidade de vida. <br />
              Tudo isso para que você no conforto da sua casa, receba os melhores produtos da região!

          </p>
        </S.Card1>
        <S.Card2 ref={sectionTwoRef}>
          <S.Image src={imagecampo} />
        </S.Card2>
      </S.WrapperSecondSection>
      <S.WrapperThreeSection >
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
          <S.TextDiv1>
          <p>&nbsp; Pedidos: Segunda-Feira até Quarta-Feira. </p>
          <p>&nbsp; Entregas: A partir de Sexta-Feira. </p>
            <p>&nbsp; Taxa de Entrega: R$ 5,00. </p>
            <p>&nbsp; Entraremos em contato caso ocorra algum imprevisto! </p>
          </S.TextDiv1>

        </S.TextDivPrincipal>
        <div ref={sectionThreeRef}>

        {!validade ? (
          <S.ButtonSecond onClick={goToLogin}>Acessar Conta</S.ButtonSecond>
          ) : (
            <S.ButtonSecond onClick={goToProducts}>
            Entrar na Feirinha
          </S.ButtonSecond>
        )}
        </div>
      </S.WrapperThreeSection>
      <Footer/>
    </S.Wrapper>
  );
};

export default Home;

/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import { Menu as MenuIcon } from '@styled-icons/feather/Menu';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import Link from 'next/link';
import veredaslogo from '../assets/images/logo.png';
import * as S from '../styles/styles';
import logomst from '../assets/images/logo-mst-rurais.png';
import imagecampo from '../assets/images/Campo-cidade.png';
import ValidadeContext from '../contexts/validade';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { validade } = useContext(ValidadeContext);

  const router = useRouter();

  const sectionOneRef = useRef<null | HTMLDivElement>(null);
  const sectionTwoRef = useRef<null | HTMLDivElement>(null);
  const sectionThreeRef = useRef<null | HTMLDivElement>(null);

  function setRef(value: number) {
    switch (value) {
      case 1:
        if (router.pathname !== '/') {
          router.push('/');
        }
        !!handleChange && handleChange('sectionOneRef');
        return;
      case 2:
        if (router.pathname !== '/') {
          router.push('/');
        }
        !!handleChange && handleChange('sectionTwoRef');
        return;
      case 3:
        if (router.pathname !== '/') {
          router.push('/');
        }
        !!handleChange && handleChange('sectionThreeRef');
    }
  }

  function mobileMenu(option: number) {
    setRef(option);
    setIsOpen(false);
  }

  const goToProducts = () => {
    router.push('/products');
  };

  const goToLogin = () => {
    router.push('/login');
  };

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

  const optionsLinksMobile = [
    {
      label: 'Home',
      action: () => mobileMenu(1),
    },
    {
      label: 'Quem somos',
      action: () => mobileMenu(2),
    },
    {
      label: 'Como funciona',
      action: () => mobileMenu(3),
    },
  ];

  const optionsLinks = [
    {
      label: 'Home',
      action: () => handleChange('sectionOneRef'),
    },
    {
      label: 'Quem somos',
      action: () => handleChange('sectionTwoRef'),
    },
    {
      label: 'Como funciona',
      action: () => handleChange('sectionThreeRef'),
    },
  ];

  const optionsButtons = !validade ? [{
    label: 'Acessar Conta',
    action: goToLogin,
  }] : [{
    label: 'Entrar na Feirinha',
    action: goToProducts,
  }];

  return (
    <S.Wrapper>

      <Header
        links={optionsLinks}
        buttons={optionsButtons}
        linksMenuFull={optionsLinksMobile}
        buttonsMenulFull={optionsButtons}
        handleSandwich={(open) => setIsOpen(open)}
        openMenuFull={isOpen}
      />

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

/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import {
  useEffect, useState, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
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
          &nbsp; Todos os produtos ofertados na semana estão na loja. <p/>
          &nbsp; Escolha o produto, a quantidade e adicione ao carrinho. <p/>
          &nbsp; Clique em finalizar o pedido. <p />
          &nbsp; Informe seus dados corretamente. <p />
            <p />
          </S.TextDiv1>
          <S.TextDiv2>
          &nbsp; Pedidos: Segunda-Feira até Quarta-Feira. <p />
          &nbsp; Entregas: A partir de Sexta-Feira. <p />
          {/* &nbsp; &nbsp; &nbsp; Alteração do pedido até as Quarta-Feira 23:59hrs. <p /> */}
          &nbsp; Frete: R$ 5,00. <p />
          &nbsp; Entraremos em contato caso ocorra algum imprevisto! <p />
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
    </S.Wrapper>
  );
};

export default Home;

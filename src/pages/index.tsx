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
            Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso
            pudia ce receita de bolis, mais bolis eu num gostis. Mé faiz
            elementum girarzis, nisi eros vermeio. Suco de cevadiss deixa as
            pessoas mais interessantis. Posuere libero varius. Nullam a nisl ut
            ante blandit hendrerit. Aenean sit amet nisi..{' '}
          </S.TextDiv1>
          <S.TextDiv2>
            Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
            levo! Interagi no mé, cursus quis, vehicula ac nisi. Praesent
            malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate
            dapibus. Copo furadis é disculpa de bebadis, arcu quam euismod
            magna.
          </S.TextDiv2>
          <S.TextDiv3>
            A ordem dos tratores não altera o pão duris. Suco de cevadiss, é um
            leite divinis, qui tem lupuliz, matis, aguis e fermentis. Admodum
            accumsan disputationi eu sit. Vide electram sadipscing et per.
            Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed
            non consequat odio.
          </S.TextDiv3>
        </S.TextDivPrincipal>
      </S.WrapperThreeSection>

      <S.WrapperFooter>
        <div>
          <p>Cooperativa Veredas da Terra</p>
          <p>CNPJ: 33.870.746/0001-05</p>
        </div>

        <div>
          <p>Contato</p>
          <p>email@veredasdaterra.com.br</p>
          <p>+55 38 9 995133333</p>
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

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import veredaslogo from '../../assets/logo.png';
import * as S from './styles';
import logomst from '../../assets/logo-mst-rurais.png';
import imagecampo from '../../assets/Campo-cidade.png';
import logoif from '../../assets/logo-if.png';
import { getOpened } from '../../api/Validade';

const Home = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [opened, setOpened] = useState(false);

  const sectionOneRef = useRef<null | HTMLDivElement>(null);
  const sectionTwoRef = useRef<null | HTMLDivElement>(null);
  const sectionThreeRef = useRef<null | HTMLDivElement>(null);

  function logit() {
    setScrollY(window.pageYOffset);
  }

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

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await getOpened();
        if (data.success === 'aberta') {
          setOpened(true);
          return;
        }
        setOpened(true);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, []);

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
            {opened ? (
              <S.Button>Entrar na feirinha</S.Button>
            ) : (
              <S.Button onClick={() => router.push('/login')}>
                Acessar conta
              </S.Button>
            )}
          </S.MenuNav>
        </S.Header>
      </S.HeaderWrapper>
      <S.HomeSectionWrapper ref={sectionOneRef}>
        <S.BGHome>
          <S.CentralizeWrapper>
            <p>Alimentos saudáveis e de qualidade</p>
            <p>Cestas Agroecologicas</p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus neque felis, sed fermentum metus tristique in. Phasellus
            imperdiet dui eu euismod tincidunt. Donec varius, mi eu cursus
            dignissim, eros libero scelerisque metus, a ullamcorper tellus elit
            ac tortor. Pellentesque lobortis elit eu ex aliquam, nec eleifend
            erat dapibus.{' '}
          </p>
          <p>
            Nullam vel molestie odio. Cras in lacinia sem. Integer consectetur
            dolor et odio venenatis eleifend. Maecenas ipsum risus, lobortis
            vitae velit ut, interdum fermentum mi. Sed ullamcorper dictum libero
            vel facilisis.
          </p>
          <p>
            Aliquam ac maximus lacus. Duis a lacus varius, viverra massa quis,
            bibendum risus. Mauris tempor nisi nisi, a condimentum ex tincidunt
            in. Fusce hendrerit dolor gravida imperdiet viverra.{' '}
          </p>
        </S.TextWrapper>
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

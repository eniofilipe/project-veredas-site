/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu as MenuIcon } from '@styled-icons/feather/Menu';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import * as S from './styles';
import veredaslogo from '../../assets/images/logo.png';

interface Itens {
  label: string;
  action: () => void;
}

interface HeaderProps {
  title?: string;
  links: Itens[];
  buttons: Itens[];
  handleSandwich: (open: boolean) => void;
  openMenuFull: boolean;
  linksMenuFull: Itens[];
  buttonsMenulFull: Itens[];
  className?: string;
}

const Header = ({
  title,
  links,
  buttons,
  handleSandwich,
  openMenuFull,
  linksMenuFull,
  buttonsMenulFull,
  className,
}: HeaderProps) => {
  const Router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const logit = () => {
    setScrollY(window.pageYOffset);
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

  return (
    <>
      <S.Sandwich>
        <S.Logo src={veredaslogo} alt="Home" />
        <S.IconWrapper>
          <MenuIcon onClick={() => handleSandwich(true)} aria-label="Open Menu" />
        </S.IconWrapper>
      </S.Sandwich>
      <S.HeaderWrapper position={scrollY}>
        <S.Header className={className}>
          <S.Logo
            src={veredaslogo}
            alt="Home"
            onClick={() => Router.push('/')}
          />
            { title && <S.TitlePage>{title}</S.TitlePage>}
          <S.MenuNav>
            {links.map((item) => (
              <S.MenuLink key={`${item.label}${Math.random() * 100}`} onClick={item.action}>{item.label}</S.MenuLink>
            ))}
            {buttons.map((item) => (
              <S.Button key={`${item.label}${Math.random() * 100}`} onClick={item.action}>{item.label}</S.Button>
            ))}
          </S.MenuNav>
        </S.Header>

        <S.MenuFull aria-hidden={!openMenuFull} isOpen={openMenuFull}>
          <CloseIcon aria-label="Close Menu" onClick={() => handleSandwich(false)} />
          <S.MenuNav>
            {linksMenuFull.map((item) => (
              <S.MenuLink key={`${item.label}${Math.random() * 100}`} onClick={item.action}>{item.label}</S.MenuLink>
            ))}
            {buttonsMenulFull.map((item) => (
              <S.Button key={`${item.label}${Math.random() * 100}`} onClick={item.action}>{item.label}</S.Button>
            ))}

          </S.MenuNav>
        </S.MenuFull>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;

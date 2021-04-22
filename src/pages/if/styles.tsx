/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/cesta.png';

export const Wrapper = styled.div``;
export const Logo = styled.img``;
export const MenuNav = styled.div`
  margin-right: 4rem;
`;

export const TitleDesenvolvedores = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

export const WrapperBody = styled.div`
  height: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 8vw;
  padding-left: 10vh;
  padding-right: 10vh;
  padding-bottom: 14vh;
  gap: 6rem;
  div {
    color: #000000;
    font-size: 1.5rem;
  }
  ${Logo}:nth-child(1) {
    width: 200px;
    padding: 1rem;
  }

  ${Logo}:nth-child(2) {
    width: 200px;
    padding: 1rem;
  }
`;

export const WrapperFooter = styled.footer`
  height: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 6vw;
  padding-bottom: 6vw;
  margin-top: 3vw;
  gap: 4rem;
  background-color: rgba(211, 211, 211, 0.8);
  div {
    color: #961913;
    font-size: 1.5rem;
  }
  ${Logo}:nth-child(1) {
    width: 200px;
    padding: 1rem;
  }

  ${Logo}:nth-child(2) {
    width: 100px;
    padding: 1rem;
  }
`;

type MenuProps = {
  background?: string;
  position?: number;
};

export const Header = styled.menu<MenuProps>`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
    justify-content: space-between;
    background-color: ${background && background === 'white'
      ? '#FFF'
      : 'rgba(211, 211, 211, 0.8)'};
  `}

  ${Logo} {
    width: 200px;
  }
`;

export const Body = styled.body``;

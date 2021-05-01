/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Logo = styled.img`
&:nth-child(1) {
  cursor: pointer;
}
`;

type MenuProps = {
  background?: string;
  position?: number;
};

export const MenuNav = styled.div`
  /* margin-right: 4rem; */
`;

export const MenuLink = styled.a`
  position: relative;
  color: #552200;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.15rem;
      background-color: #017C00;
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const TitlePage = styled.h1`
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  font-weight: 400;
  font-size: 1.5rem;
  cursor: default;
`;

export const Header = styled.menu<MenuProps>`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
    justify-content: space-between;
    background-color: ${background && background === 'white'
      ? '#FFF'
      : '#FFF'};
  `}


  ${Logo} {
    width: 200px;
  }
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const HeaderWrapper = styled.div<MenuProps>`
  ${({ position }) => css`
    position: relative;
    opacity: ${position !== 0 ? 1 : 0.8};
    background-color: ${position !== 0
      ? 'rgba(250, 250, 250, 1)'
      : 'rgba(250, 250, 240, 0.8)'};
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  `}
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

export const Body = styled.body``;

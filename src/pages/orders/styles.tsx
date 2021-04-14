/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/cesta.png';

export const Logo = styled.img``;
export const MenuNav = styled.div`
  margin-right: 4rem;
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
export const HeaderWrapper = styled.div<MenuProps>`
  ${({ position }) => css`
    position: fixed;
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

export const Title = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  margin-right: 2rem;
`;

export const WrapperMenu = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 2rem;
  gap: 3rem;
  ${Title} {
    cursor: pointer;
  }
`;

export const TitlePedidos = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

// export const Logo = styled.img`
//   width: 16rem;
//   position: absolute;
//   left: 2rem;
//   top: 0.4rem;
// `;

export const Wrapper = styled.div`
  body {
    background-color: rgba(196, 196, 196, 0.1);
    height: 0vh;
    position: absolute;
    width: 100%;
    /* height: 100%; */
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;
export const Body = styled.body``;

export default Body;

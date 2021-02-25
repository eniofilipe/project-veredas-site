/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/cesta.png';

// export const Logo = styled.img`
//   width: 16rem;
//   position: absolute;
//   left: 2rem;
//   top: 0.4rem;
// `;
export const Logo = styled.img``;
export const MenuNav = styled.div`
  margin-right: 4rem;
`;
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

export const Title = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  margin-right: 2rem;
`;

export const TitlePerfil = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

type MenuProps = {
  background?: string;
  position?: number;
};

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

export const Button = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  height: 3rem;
  cursor: pointer;
  width: 10%;
  margin-top: 1rem;
  margin-left: 77.5vw;
  margin-bottom: 4rem;
  outline: none;

  &:hover {
    color: rgba(95, 30, 31, 0.7);
    border: 1px solid rgba(95, 30, 31, 0.7);
  }
`;

export const Wrapper = styled.div`
  body {
    background-color: rgba(196, 196, 196, 0.1);
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12rem;
  gap: 2rem;
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
export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  padding: 1rem 2rem;
  border-radius: 4px;
  row-gap: 1rem;
  height: 100%;
  ${Button} {
    margin-left: auto;
    margin-top: 1rem;
    width: 25%;
    margin-bottom: 0.5rem;
  }
`;
export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  padding: 1rem 2rem;
  border-radius: 4px;
  row-gap: 1rem;
  height: 100%;
`;
export const Input = styled.input`
  margin-left: auto;
  width: 60%;
  border-radius: 4px;
  border: 1px solid #444;
  outline: none;
  font-size: 1.4rem;
  color: rgba(95, 30, 31, 0.7);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
`;
export const Row = styled.div`
  display: flex;
`;
export const Label = styled.p`
  font-size: 1.4rem;

  color: rgba(95, 30, 31, 0.7);
`;

export default Label;

import styled, { css } from 'styled-components'

export const Logo = styled.img``;

export const MenuNav = styled.div`
  margin-right: 4rem;
  @media (max-width: 1100px) {
    margin-right: 1rem;
  }
`;

export const MenuLink = styled.a`
  position: relative;
  color: #552200;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: #017c00;
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

export const Button = styled.button`
  background: #017c00;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
    cursor: pointer;
  }
`;
type MenuProps = {
  background?: string
  position?: number
}
export const Header = styled.menu<MenuProps>`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
    justify-content: space-between;
    background-color: ${background && background === 'white'
    ? '#FFF'
    : 'rgba(250, 250, 250, 1)'};
  `}

  ${Logo} {
    width: 200px;
  }
  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1020px) {
    ${MenuLink} {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 940px) {
    ${Button} {
      padding: 1rem 1.5rem;
      margin-left: 1.5rem;
      font-size: 1rem;
    }
  }
`;
export const HeaderWrapper = styled.div<MenuProps>`
  position: fixed;
  opacity: 1;
  background-color: rgba(250, 250, 250, 1);
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;

export const IconWrapper = styled.div`
  color: #444;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const Sandwich = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  justify-content: space-between;
  color: #444;
  width: 4rem;
  height: 5rem;
  cursor: pointer;
  display: flex;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  ${Logo} {
    height: 4rem;
  }
  @media (max-width: 300px) {
    display: flex;
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
`
type MenufullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenufullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: 5;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 2.4rem;
      cursor: pointer;
      width: 4rem;
      height: 4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: #222;
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 2.4rem;

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;

      &:hover {
        &::after {
          background-color: #339034;
        }
      }
    }
  `}
`;

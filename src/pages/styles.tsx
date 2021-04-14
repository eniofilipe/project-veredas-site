/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/cesta.png';

export const Wrapper = styled.div``;
export const Logo = styled.img``;
export const MenuNav = styled.div`
  margin-right: 4rem;
`;

export const MenuLink = styled.a`
  position: relative;
  color: #961913;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: #961913;
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

export const HomeSectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const BGHome = styled.div`
  background-image: url(${bg1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100vw;
  height: 100vh;
`;
export const CentralizeWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  p {
    font-size: 3.5rem;
    font-weight: 600;
    color: #fff;
    padding-bottom: 0rem;
  }
  p:nth-child(2) {
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: 300;
    color: #fff;
  }

  padding-top: 15vh;
`;

export const WrapperSecondSection = styled.div`
  padding-top: 110vh;
  display: flex;
  padding-bottom: 10vh;
`;

export const Card1 = styled.div`
  margin-left: 5%;
  background-color: #961913;
  height: 100%;
  width: 40vw;
  padding: 2rem;
  border-radius: 4px;
  p {
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    line-height: 1.5;
  }
  p:nth-child(1) {
    font-weight: 800;
    font-size: 3rem;
    padding-bottom: 2rem;
  }
`;
export const Image = styled.img``;

export const Card2 = styled.div`
  ${Image} {
    margin: 2rem;
    width: 90%;
    height: 80%;
    border-radius: 4px;
  }
  padding-top: 1rem;
  padding-left: 2rem;
`;
export const WrapperThreeSection = styled.div`
  background-image: url(${bg2});
  height: 60rem;
  width: 100vw;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 24%;
  padding: 2%;
  p:nth-child(1) {
    font-size: 4rem;
    font-weight: 600;
    padding-bottom: 4%;
  }

  p:nth-child(3) {
    padding-left: 0%;
    padding-top: 2%;
    padding-bottom: 4%;
  }

  p {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.8;
  }
`;

export const TextDivPrincipal = styled.div`
  text-align: center;
  width: 100%;
`;

export const TextDiv1 = styled.div`
  float: left;
  width: 30%;
  text-align: left;
  color: #fff;
  font-size: 1.8rem;
  line-height: 1.8;
  margin-right: 2rem;
  margin-left: 2.8rem;
`;

export const TextDiv2 = styled.div`
  float: left;
  width: 30%;
  text-align: left;
  color: #fff;
  font-size: 1.8rem;
  line-height: 2;
  margin-right: 2rem;
`;

export const TextDiv3 = styled.div`
  float: left;
  width: 30%;
  text-align: left;
  color: #fff;
  font-size: 1.8rem;
  line-height: 2;
  margin-right: 1rem;
  /* margin-bottom: 2rem; */
`;

export const WrapperFooter = styled.footer`
  height: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 6vw;
  padding-bottom: 6vw;
  gap: 4rem;

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

export const Button = styled.button`
  background: #961913;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    color: #961913;
    background: rgba(205, 205, 205, 0.7);
    border: 1px solid #961913;
    cursor: pointer;
  }
`;

export const ButtonSecond = styled.button`
  background: #961913;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 3rem;

  &:hover {
    color: #961913;
    background: rgba(205, 205, 205, 0.7);
    border: 1px solid #961913;
    cursor: pointer;
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

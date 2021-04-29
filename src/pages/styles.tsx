/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/cesta.png';

export const Wrapper = styled.div``;
export const Logo = styled.img`
`;
export const MenuNav = styled.div`
  margin-right: 4rem;
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
  background-color: #016300;
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
  width: 100%;

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
  height: 18%;
  /* padding: 4%; */
  padding: 0px 50px 50px 25px;
  p:nth-child(1) {
    font-size: 4rem;
    font-weight: 600;
    /* padding-bottom: 20px; */
  }

  p:nth-child(3) {
    padding-left: 0%;
    padding-top: 0;
    padding-bottom: 20px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextDiv1 = styled.div`
  /* float: left;
  width: 42%;
  height: 46%;
  text-align: left;
  color: #552200;
  background-color: rgba(211, 211, 211, 0.8);
  font-size: 1.8rem;
  line-height: 1.8;
  margin-right: 3rem;
  margin-left: 8rem;
  border-radius: 10px;
  padding: 0px 50px 50px 25px; */
  color: #552200;
  background: rgba(255,255,255,0.92);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  box-shadow: inset 0px 0px 11px 2px #fff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8;
`;

export const TextDiv2 = styled.div`
 border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  color: #552200;
  background: rgba(255,255,255,0.92);
  padding: 4rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8;
  /* float: left;
  width: 42%;
  height: 52%;
  text-align: left;
  color: #017C00;
  background-color: rgba(211, 211, 211, 0.8);
  font-size: 1.8rem;
  line-height: 2;
  margin-top: 10rem;
  margin-right: 2rem;
  border-radius: 10px;
  padding: 0px 50px 50px 25px; */
`;

export const TextDiv3 = styled.div`
  float: left;
  width: 30%;
  height: 100%;
  text-align: left;
  color: #961913;
  background-color: rgba(211, 211, 211, 0.8);
  font-size: 1.8rem;
  line-height: 2;
  margin-right: 1rem;
  /* margin-bottom: 2rem; */
  border-radius: 10px;
  padding: 0px 50px 50px 25px;
`;

export const WrapperFooter = styled.footer`
  height: 20vh;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding-top: 4vw; */
  /* padding-bottom: 6vw; */
  /* gap: 4rem; */
  background-color: #fff;

  div p{
    color: #552200;
    font-size: 1.1rem;
  }
  div h1{
    font-weight: bold;
    color: #017C00;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  #info{
    text-align: center;
    /* border: 1px solid black; */
    margin-left: 12.3rem;

    /* padding-left: 2.8rem; */
  }
  #logo{
    margin-right: 4rem;
    display: flex;
    /* border: 1px solid black; */
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* padding-right: 8rem; */
  }
  #contato{
    /* border: 1px solid black; */
    margin-left: 8rem;
    text-align: center;
    /* padding-right: 8rem; */
    /* margin-right: 14rem; */
  }
   ${Logo}:nth-child(1) {
    width: 250px;
    padding: 0.8rem;
  }
  ${Logo}:nth-child(2) {
    width: 120px;
    padding: 1rem;
    /* margin-left: 2rem; */
  }
  ${Logo}:nth-child(3) {
    width: 150px;
    padding: 1rem;
    border-radius: 30px;
  }

  /* ${Logo}:nth-child(2) {
    width: 150px;
    padding: 1rem;
    margin-left: 2rem;
  } */
  /* ${Logo}:nth-child(3) {
    width: 175px;
    padding: 1rem;
    border-radius: 30px;
  } */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px -1.95px 6px;
`;

export const Button = styled.button`
  background: #017C00;
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

export const ButtonSecond = styled.button`
  background: #017C00;
  color: #fff;

  border-radius: 8px;
  padding: 1.5rem 1.5rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 3rem;

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
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

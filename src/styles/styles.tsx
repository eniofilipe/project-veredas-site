/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/cesta.png';

export const Wrapper = styled.div`
  width: 100vw;
`;
export const Logo = styled.img`
`;
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
  height: 100vh;
  width: 100vw;
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

  @media (max-width: 1367px) {
    p {
      font-size: 2.5rem;
    }
    p:nth-child(2) {
    font-size: 2rem;
    font-weight: 400;
    }
  }

  @media (max-width: 830px) {
    padding: 1rem;

    p {
      font-size: 2rem;
    }
    p:nth-child(2) {
    font-size: 1.5rem;
    }
  }
`;


export const Card1 = styled.div`
  margin-left: 5%;
  background-color: #016300;
  height: 100%;
  width: 50vw;
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

  @media (max-width: 1367px) {
    margin-left: 4%;
    padding: 1.8rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
    p {
      font-size: 1.5rem;
      line-height: 1.3;
  }
  p:nth-child(1) {
    font-size: 2.3rem;
    padding-bottom: 1.8rem;
  }
  }
`;
export const Image = styled.img`
`;
export const Card2 = styled.div`
  ${Image} {
    margin: 2rem;
    width: 90%;
    height: 80%;
    border-radius: 4px;
  }
  padding-left: 2rem;
`;

export const WrapperSecondSection = styled.div`
  padding-top: 110vh;
  display: flex;
  padding-bottom: 10vh;
  flex-direction: row;
  @media (max-width:1000px) {
    padding-top: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  ${Card1}{
    margin-top: 1rem;
    margin-left:0;
    width: 80%;
    height:100%;
  }
  ${Card2}{
  padding-left: 0;
  display: flex;
  width: 100%;
  align-items: center;
    flex-direction: column;
    ${Image}{
      margin: 1rem;
      width: 90%;
      height:70%;
      }
  }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 18%;
  padding: 0px 50px 50px 25px;
  p:nth-child(1) {
    font-size: 4rem;
    font-weight: 600;
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
  @media (max-width: 1367px) {
    height: 42vh;
    width: 40vw;
    background: rgba(255,255,255,0.75);
    padding: 1.5rem;

  }
`;


export const WrapperThreeSection = styled.div`
  background-image: url(${bg2});
  height: 100vh;
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

  @media (max-width: 960px) {

    ${TextWrapper}{
      p{
      font-size: 3rem;
      }
    }
    ${TextDiv1}{
      height: 50vh;
      font-size: 1.5rem;
      line-height: 1.3;
      width: 40vw;
      padding: 1.2rem;
    }
  }

  @media (max-width: 700px) {
    ${TextDivPrincipal}{
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ${TextDiv1}{
      width: 80vw;
      height: 30vh;
      padding-top: 1rem;
      margin-bottom: 1rem;
    }
    ${TextWrapper}{
      padding: 0rem 1rem;
      height: 10rem;
    }
  }
  @media (max-width: 520px) {
    height: 120vh;
    ${TextWrapper}{
      p{
      font-size: 2rem;
      }
    }
    ${TextDiv1}{
      width:90vw;
      height: 35vh;
      padding: 0;
      padding-top: 1rem;
      margin-bottom: 0.5rem;
      p{
        font-size: 1.2rem;
      }
    }
    ${TextWrapper}{
      padding: 0rem 1rem;
      height: 4rem;
    }
  }
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
  padding: 1.2rem 1.2rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
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
      : 'rgba(250, 250, 250, 1)'};
  `}

  ${Logo} {
    width: 200px;
  }
  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1020px) {
    ${MenuLink}{
      font-size: 1.2rem;
    }
  }

  @media (max-width: 940px) {
    ${Button}{
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
    color:#444;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  `


export const Sandwich = styled.div`
  color: #444;
  width: 4rem;
  height: 5rem;
  cursor: pointer;
  display:flex;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  ${Logo}{
    height: 4rem;
  }
  @media (max-width: 300px) {
    display: flex;
  }
  `

type MenufullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenufullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFF;
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
`

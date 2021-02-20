/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/cesta.png';

// /* eslint-disable import/no-unresolved */
// import styled from 'styled-components';
// import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';

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
    width: 100%;
    height: 90%;
    border-radius: 4px;
  }
  padding-top: 1rem;
  padding-left: 2rem;
`;
export const WrapperThreeSection = styled.div`
  background-image: url(${bg2});
  height: 50rem;
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
  height: 100%;
  padding: 5%;
  p:nth-child(1) {
    font-size: 4rem;
    font-weight: 600;
    padding-bottom: 4%;
  }

  p:nth-child(3) {
    padding-left: 30%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  p {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.85;
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

export const ButtonLogin = styled.button<Button>`
  background: #961913;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  margin-left: 8rem;
  margin-right: 8rem;
  font-weight: bold;
  font-size: 1rem;

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

// export const Header = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   background: rgba(30, 149, 31, 0.4);
//   justify-content: center;
//   align-items: center;
//   padding: 2%;
// `;

// export const Logo = styled.img`
//   width: auto;
// `;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const Title = styled.span`
//   font-size: 40px;
//   font-weight: 700;
//   color: ${(props) => props.theme.colors.primary};
//   text-align: center;
//   margin-top: 50px;
//   margin-bottom: 25px;
// `;

// export const ButtonLogin = styled(Button)`
//   width: 80%;
//   height: 62px;
//   max-width: 360px;
//   margin: 5px;
//   align-self: flex-end;
// `;

// export const ErrorMessage = styled.span`
//   font-size: 24px;
//   font-weight: 400;
//   color: ${(props) => props.theme.colors.danger};
//   text-align: center;
//   margin-top: 10px;
// `;

export const InputLogin = styled(Input)`
  height: 50px;
  width: 80%;
  max-width: 360px;
  margin: 5px;
  outline: none;
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
`;

export const LoginContainer = styled.div`
  width: 80%;
  max-width: 460px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 20rem;

  > div {
    align-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > span {
      width: 80px;
    }
  }
`;
export const SubTitle = styled.a`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 3rem;
  height: 1.5rem;
`;

export default Icon;

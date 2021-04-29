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
export const Title = styled.h1`
  font-size: 2rem;
  color: #552200;
  cursor: default;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &#principal{
    margin-top: 3rem;
  margin-bottom: 0rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;


export const WrapperData = styled.div`
 display: flex;
  flex-direction: column;
  width: 48%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
  padding-bottom: 4rem;
  ${Title} {
    text-align: left;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
  }
  padding-right: 3rem;
`;
export const WrapperContent = styled.div`
 display: flex;
  width: 100%;
  padding-left: 14%;
  padding-right: 14%;
  justify-content: space-between;
`;

export const Form = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Label = styled.label`
   font-size: 1.4rem;
  color: #552200;
  margin-top: 14px;
`;
export const Input = styled.input`
  margin-left: auto;
  width: 60%;
  background: #f4f4f4;
  border: 2px solid #c3c3c3;
  height: 60px;
  border-radius: 0.4rem;
  outline: none;
  font-size: 1.4rem;
  color: #552200;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 14px;
`;
export const Body = styled.div``;
export const WrapperController = styled.div``;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
`;
export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-left: 14%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  ${Title} {
    text-align: left;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
    margin-left: 16%;
  }
`;
export const WrapperDataAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 30%;
  padding-right: 30%;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  padding-left: 12%;
  padding-right: 14%;
  justify-content: space-between;
  padding-top: 0.25%;
  padding-bottom: 5%;
  ${Button} {
    width: 24rem;
  }
  ${Button}:nth-child(1) {
    background: #961913;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #78140f;
    &:hover {
      color: #fff;
      background: #78140f;
    }
  }
`;
export const WrapperFooter = styled.footer`
  height: 20vh;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
    margin-left: 12.3rem;
  }
  #logo{
    margin-right: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  #contato{
    margin-left: 8rem;
    text-align: center;
  }
   ${Logo}:nth-child(1) {
    width: 250px;
    padding: 0.8rem;
  }
  ${Logo}:nth-child(2) {
    width: 120px;
    padding: 1rem;
  }
  ${Logo}:nth-child(3) {
    width: 150px;
    padding: 1rem;
    border-radius: 30px;
  }
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px -1.95px 6px;
`;

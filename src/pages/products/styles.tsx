/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Logo = styled.img`
&:nth-child(1) {
  cursor: pointer;
}
`;

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

export const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 18rem));
  width: 100%;
  row-gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const DivCategory = styled.div`
  align-items: center;
  display: flex;
`;

export const WrapperCategory = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  background-color: #fff;
  margin: 2rem;
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 10px;
  box-shadow:  0px 0px 30px 1px #cdcdcd;
  align-self: flex-start;
`;

export const HeadCategory = styled.h1`
  align-self: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #552200;
  font-size: 1.3rem;
`;

export const Label = styled.label`
  padding-left: 0.4rem;
  font-size: 1.3rem;
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
`;

export const WrapperIcons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: -5rem;
  gap: 10%;
`;

export const Icon = styled.div`
  color: #fff;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  cursor: pointer;
  position: relative;
  span{
    position: absolute;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -20px;
    top: -10px;
    padding: 5px;
    border-radius: 50%;
    background: #017C00;
    width: 1.8rem;
    height: 1.8rem;
    color: #fff;
    font-weight: 600;
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

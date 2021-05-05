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
  column-gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media(max-width: 1452px){
    column-gap: 0rem;
  }

  @media(max-width: 1399px){
    grid-template-columns: repeat(auto-fit, minmax(16rem, 17rem));
  }

  @media(max-width: 1325px){
    column-gap: 3rem;
  }

  @media(max-width: 1149px){
    column-gap: 2rem;
  }

  @media(max-width: 1110px){
    column-gap: 0rem;
  }

  @media(max-width: 1035px){
    padding-left: 3rem;
    column-gap: 3rem;
  }

  @media(max-width: 828px){
    padding-left: 2rem;
    column-gap: 2rem;
  }

  @media(max-width: 791px){
    padding-left: 1rem;
    column-gap: 0rem;
  }

  @media(max-width: 734px){
    grid-template-columns: repeat(auto-fit, minmax(16rem, 17rem));
    column-gap: 1rem;
    padding-left: 8rem;
    row-gap: 2rem;
  }

  @media(max-width: 700px){
    padding-left: 2rem;
  }

  @media(max-width: 490px){
    padding-left: 6rem;
  }

  @media(max-width: 430px){
    padding-left: 5rem;
  }

  @media(max-width: 395px){
    padding-left: 4rem;
  }
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
  padding: 1rem 2rem 1rem 1rem;
  padding-bottom: 2rem;
  border-radius: 10px;
  box-shadow:  0px 0px 30px 1px #cdcdcd;
  align-self: flex-start;

  @media(max-width: 984px){
    width: 25%;
  }

  @media(max-width: 620px){
    width: 25%;
  }

  @media(max-width: 490px){
    &#consumo{
      display: none;
    }
  }
`;

export const HeadCategory = styled.h1`
  align-self: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #552200;
  font-size: 1.3rem;

  @media(max-width: 1091px){
    font-size: 1.1rem;
  }
`;

export const Label = styled.label`
  padding-left: 0.4rem;
  font-size: 1.3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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

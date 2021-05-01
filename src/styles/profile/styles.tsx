/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Logo = styled.img`
&:nth-child(1) {
  cursor: pointer;
}
`;

export const MenuNav = styled.div`
`;


export const MenuLink = styled.a`
  position: relative;
  color: #552200;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.15rem;
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

export const Header = styled.menu`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 2rem;
    background-color: #fff;
  ${Logo} {
    width: 200px;
  }
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #552200;
  cursor: default;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight: 400;
`;

export const MenuItem = styled.h1`
  font-size: 1.5rem;
  color: #552200;
  cursor: default;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight: 400;
  cursor: pointer;
`;

export const TitlePage = styled.h1`
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  font-weight: 400;
  font-size: 1.5rem;
  cursor: default;
`;

export const HeaderWrapper = styled.div`

`;

export const Button = styled.button`
  background: #017C00;
  color: #fff;
  border: 1px solid #017C00;
  border-radius: 8px;
  padding: 1rem 2rem;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
    border: 1px solid #016300;
    cursor: pointer;
  }
  #button-passwd{
    margin-top: 400px;
    color: black;
    border: 2px solid black;
  }
`;

export const Wrapper = styled.div``;

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  padding-left: 14%;
  padding-right: 14%;
  justify-content: space-between;
`;

export const WrapperMenu = styled.div`
  display: flex;
  right: 1rem;
  top: 2rem;
  gap: 3rem;
  border: 1px solid blue;
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
  padding-bottom: 2rem;
  ${Title} {
    text-align: left;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
  }
  padding-right: 3rem;
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

export const Label = styled.p`
  font-size: 1.4rem;
  color: #552200;
  margin-top: 14px;
`;

export default Label;

export const WrapperController = styled.div``;

export const Form = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WrapperDataAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 30%;
  padding-right: 30%;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  ${Button} {
    padding: 0rem 2rem 0rem 2rem;
    margin-left: none;
    height: 54px;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${Button} {
    width: 114px;
    font-size: 0.75rem;
    text-align: center;
    margin-left: 0;
    padding: 0;
  }

  ${Button}:nth-child(1) {
    background-color: #017C00;
    border: 1px solid #017C00;
    &:hover {
      color:  #fff;
      background: #016300;
      border: 1px solid #017C00;
      cursor: pointer;
    }
  }

  ${Button}:nth-child(2) {
    color: #fff;
    background-color: #961913;
    border: 1px solid #961913;
    &:hover {
      color: #fff;
      background: #78140f;
      border: 1px solid #78140f;
      cursor: pointer;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  ${Button} {
    width: 100%;
    margin-top: 2.2rem;
  }
  &#field{
    margin-top: 40px;
  }

  ${EditButtons} {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${Button} {
      width: 30%;
      margin-top: 0rem;
      font-size: 1rem;
      padding: 1rem 2rem 1rem 2rem;
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


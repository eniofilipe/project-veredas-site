import styled, { css } from 'styled-components';

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
export const HeaderWrapper = styled.div`
  position: relative;
  opacity: 1;
  background-color: rgba(250, 250, 240, 0.8);
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;

export const Button = styled.button`
  background: #961913;
  color: #fff;
  border: 1px solid #961913;
  border-radius: 8px;
  padding: 1rem 2rem;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    color: #961913;
    background: rgba(205, 205, 205, 0.7);
    border: 1px solid #961913;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  color: #961913;
  font-weight: 600;
  text-align: center;
  padding-top: 2rem;
`;

export const Header = styled.menu`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  justify-content: space-between;
  background-color: rgba(211, 211, 211, 0.8);
  ${Logo} {
    width: 200px;
  }
`;

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  background-color: #fafafa;
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
  font-size: 1.3rem;
`;
export const Input = styled.input`
  font-size: 1.3rem;
  border-radius: 4px;
  outline: none;
  padding: 4px;
  overflow: hidden;
  margin-left: 10px;
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
  background-color: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
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
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  padding-left: 12%;
  padding-right: 14%;
  justify-content: space-between;
  padding-top: 2%;
  padding-bottom: 5%;
  ${Button} {
    width: 12rem;
  }
  ${Button}:nth-child(1) {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: #000;
    border: 1px solid #ffffff;
    &:hover {
      color: #961913;
      box-shadow: 0px 6px 6px #961913;
    }
  }
`;
export const WrapperFooter = styled.footer`
  height: 8vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 6vw;
  padding-bottom: 6vw;
  gap: 4rem;
  background-color: rgba(211, 211, 211, 0.8);

  div {
    color: #961913;
    font-size: 1.5rem;
  }
  ${Logo}:nth-child(1) {
    width: 250px;
    padding-left: 1rem;
  }

  ${Logo}:nth-child(2) {
    width: 120px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  ${Logo}:nth-child(3) {
    width: 110px;
    border-radius: 18px;
  }
`;

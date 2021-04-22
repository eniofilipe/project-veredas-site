/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.main``;
export const Logo = styled.img``;

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: flex-start;
  align-items: flex-start;
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
export const Title = styled.p`
  white-space: nowrap;
  align-self: center;
  margin: 0 25%;
  font-size: 2.5rem;
`;

export const TitleCart = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

export const WrapperMenu = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 2rem;
  gap: 3rem;
  ${Title} {
    cursor: pointer;
  }
`;

export const WrapperContent = styled.div`
  width: 80%;
  margin: 1.5rem auto;
`;
export const Label = styled.p`
  align-self: flex-start;
  color: #961913;
  font-weight: 500;
  font-size: 1.8rem;
`;
export const WrapperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  padding-left: 5%;
  margin-top: 0.4rem;
  padding: 1rem;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const WrapperControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;
export const SumButton = styled.button`
  padding: 0.6rem;
  width: 2.8rem;
  background: #961913;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ::after {
    content: '+';
    color: #fafafa;
    font-weight: 600;
    font-size: 1rem;
  }
`;
export const SubButton = styled.button`
  padding: 0.6rem;
  width: 2.8rem;
  background: #961913;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ::after {
    content: '-';
    color: #fafafa;
    font-weight: 600;
    font-size: 1rem;
  }
`;
export const Text = styled.p`
  color: rgba(95, 30, 31, 0.7);
  font-size: 1.4rem;
`;
export const Value = styled.p`
  color: rgba(95, 30, 31, 0.7);
  font-size: 1.4rem;
`;
export const Items = styled.div`
  margin-top: 1rem;
  padding: 0;
  background: #fafafa;
  padding-bottom: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const WrapperDelivery = styled.div`
  border-bottom: 1px solid #aa5e5a;
`;
export const WrapperSelect = styled.div`
  display: flex;
  padding-top: 3rem;
  width: 100%;
  padding-left: 50%;
  gap: 5%;
  ${Label} {
    font-size: 1.5rem;
    align-self: flex-end;
    font-weight: 400;
  }
`;
export const Select = styled.select`
  color: #aa5e5a;
  outline: none;
  padding: 0 1rem;
`;
export const Address = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 1rem;
  ${Text} {
    font-size: 1.5rem;
    width: 90%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 80%;
  margin: 4rem auto;
  justify-content: space-between;
`;
export const CancelButton = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 4rem;
  width: 6rem;
  border: none;
  font-size: 1.2rem;
  :hover {
    background: #961913;
    color: white;
    transition: 0.4s;
    cursor:pointer;
  }
`;
export const AcceptButton = styled.button`
  background: #961913;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 500;
  border: none;
  color: white;
  font-size: 1.2rem;
  :hover {
    border: 2px solid  #961913;
    background: white;
    color:  #961913;
    font-weight: bold;
    transition: 0.4s;
    cursor:pointer;
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
  background-color: rgba(211, 211, 211, 0.8);

  div {
    color: #fff;
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
  ${Logo}:nth-child(3) {
    width: 120px;
    padding: 1rem;
    border-radius: 30px;
  }
`;

export default AcceptButton;

export const H1 = styled.h1`
  text-align: center;
  color: #961913;
  font-weight: 500;
  font-size: 1.8rem;
`;
export const WrapperProd = styled.div`
  padding-left: 1rem;
`;

export const SubTotal = styled.p`
  width: 100%;
  color: rgba(95, 30, 31, 0.7);
  font-size: 1.4rem;
`;

export const WrapperSubtotal = styled.div`
  margin-top: 1rem;
  margin-left: 65%;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.6rem;
  justify-content: space-between;
  ${WrapperSubtotal} {
    padding: 1rem;
  }
`;
export const Line = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  height: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 98%;
`;

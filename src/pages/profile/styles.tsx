/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import styled, { css } from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/cesta.png';

// export const Logo = styled.img`
//   width: 16rem;
//   position: absolute;
//   left: 2rem;
//   top: 0.4rem;
// `;
export const Logo = styled.img``;
export const MenuNav = styled.div`
  margin-right: 4rem;
`;
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
  font-size: 2rem;
  color: #444;
  cursor: default;
  margin-right: 2rem;
`;

export const TitlePerfil = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

type MenuProps = {
  background?: string;
  position?: number;
};

export const HeaderWrapper = styled.div`
  position: relative;
  opacity: 1;
  background-color: 'rgba(250, 250, 240, 0.8)';
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
  position: absolute;
  right: 1rem;
  top: 2rem;
  gap: 3rem;
  ${Title} {
    cursor: pointer;
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
export const Input = styled.input`
  margin-left: auto;
  width: 60%;
  border-radius: 4px;
  border: 1px solid #444;
  outline: none;
  font-size: 1.4rem;
  color: rgba(95, 30, 31, 0.7);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
`;

export const Label = styled.p`
  font-size: 1.4rem;

  color: rgba(95, 30, 31, 0.7);
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
    height: 40px;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${Button} {
    width: 80px;
    font-size: 0.75rem;
    text-align: center;
    margin-left: 0;
    padding: 0;
  }

  ${Button}:nth-child(1) {
    background-color: green;
    border: 1px solid green;
    &:hover {
      color: green;
      background: rgba(205, 205, 205, 0.7);
      border: 1px solid green;
      cursor: pointer;
    }
  }

  ${Button}:nth-child(2) {
    color: rgba(95, 30, 31, 0.7);
    background-color: transparent;
    border: 1px solid rgba(205, 205, 205, 0.7);
    &:hover {
      color: rgba(95, 30, 31, 0.7);
      background: rgba(205, 205, 205, 0.7);
      border: 1px solid rgba(95, 30, 31, 0.7);
      cursor: pointer;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  ${Button} {
    width: 100%;
    margin-top: 2rem;
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
  margin-top: 5vh;
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
    /* color: #fff; */
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

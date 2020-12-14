import styled from 'styled-components';

export const Logo = styled.img`
  width: 16rem;
  position: absolute;
  left: 2rem;
  top: 0.4rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  color: rgba(95, 30, 31, 0.7);
  cursor: default;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 2rem 1%;
  ${Title} {
    color: #444;
  }

  @media only screen and (max-width: 695px) {
    ${Logo} {
      width: 14rem;
      left: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 1.2rem 1%;

    ${Logo} {
      width: 10rem;
      left: 1rem;
    }
    ${Title} {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 467px) {
    padding: 1.2rem 1%;

    ${Logo} {
      width: 8rem;
      left: 0.7rem;
    }
    ${Title} {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 367px) {
    padding: 1rem 1%;

    ${Logo} {
      width: 6rem;
      left: 0.5rem;
    }
    ${Title} {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 275px) {
    justify-content: flex-end;

    padding: 1rem 1%;

    ${Logo} {
      width: 7rem;
      left: 0.5rem;
    }
    ${Title} {
      font-size: 1.2rem;
      padding-right: 1rem;
    }
  }
`;

export const Button = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  height: 3rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: rgba(95, 30, 31, 0.7);
    border: 1px solid rgba(95, 30, 31, 0.7);
  }
`;

export const Wrapper = styled.div``;
export const WrapperContent = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Label = styled.p`
  font-size: 1.4rem;
  color: rgba(95, 30, 31, 0.7);
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

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  padding: 1rem 2rem;
  border-radius: 4px;
  row-gap: 1rem;
  height: 100%;
  ${Button} {
    margin-left: auto;
    margin-top: 1rem;
    width: 25%;
    margin-bottom: 0.5rem;
  }
`;

export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  padding: 1rem 2rem;
  border-radius: 4px;
  row-gap: 1rem;
  height: 100%;
`;
export const WrapperController = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;

  @media only screen and (max-width: 1393px) {
    width: 80%;
  }
  @media only screen and (max-width: 1217px) {
    width: 90%;
  }

  @media only screen and (max-width: 1083px) {
    ${Label} {
      font-size: 1.5rem;
    }
    ${Input} {
      width: 50%;
    }
  }

  @media only screen and (max-width: 901px) {
    ${Label} {
      font-size: 1.2rem;
    }
    ${Input} {
      width: 45%;
    }
  }

  @media only screen and (max-width: 750px) {
    padding-top: 2rem;

    ${WrapperData} {
      padding: 0.5rem 1rem;
    }
    ${WrapperAddress} {
      padding: 0.5rem 1rem;
    }
  }
  @media only screen and (max-width: 675px) {
    width: 80%;
    ${WrapperContent} {
      flex-direction: column;
    }
    ${Label} {
      font-size: 1.5rem;
    }
    ${Input} {
      width: 50%;
    }
  }

  @media only screen and (max-width: 505px) {
    width: 85%;

    ${Label} {
      font-size: 1.3rem;
    }
    ${Input} {
      width: 45%;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 90%;

    ${Label} {
      font-size: 1.2rem;
    }
    ${Input} {
      width: 40%;
    }
  }
`;

export const Body = styled.body`
  background-color: rgba(196, 196, 196, 0.1);
  height: 110vh;
  max-width: 1580px;
  margin: 0 auto;
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

export const Row = styled.div`
  display: flex;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem auto;

  ${Button} {
    width: 6rem;
  }
  ${Button}:nth-child(2) {
    background: green;
    color: white;
    border: 1px solid green;
    &:hover {
      color: green;
      background: white;
    }
  }
`;

export default Header;

import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 2rem 1%;
`;

export const Button = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  height: 3rem;
  cursor: pointer;
  width: 10%;
  margin-top: 1rem;
  margin-left: 77.5vw;
  margin-bottom: 4rem;
  outline: none;

  &:hover {
    color: rgba(95, 30, 31, 0.7);
    border: 1px solid rgba(95, 30, 31, 0.7);
  }
`;

export const Logo = styled.img`
  width: 16rem;
  position: absolute;
  left: 2rem;
  top: 0.4rem;
`;

export const Wrapper = styled.div`
  body {
    background-color: rgba(196, 196, 196, 0.1);
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  gap: 2rem;
`;
export const Title = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
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
export const Row = styled.div`
  display: flex;
`;
export const Label = styled.p`
  font-size: 1.4rem;

  color: rgba(95, 30, 31, 0.7);
`;

export default Label;

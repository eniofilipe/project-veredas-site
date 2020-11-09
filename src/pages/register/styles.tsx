import styled from 'styled-components';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 5%;
  height: 126px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 1100px;

  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 10px;
  width: 60%;
  margin: 10px;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 40%;
  @media (max-width: 600px) {
    width: auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
export const InputForm = styled(Input)`
  width: 80%;
  height: 35px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  max-width: 1100px;
  align-self: center;
  width: 100%;
  padding: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonLogin = styled(Button)`
  height: 50px;
  padding: 0 20px;
  @media (max-width: 600px) {
    width: 75%;
    margin: 10px;
  }
`;

export const FinallyButton = styled(Button)`
  height: 50px;
  padding: 0 20px;
  @media (max-width: 600px) {
    width: 75%;
    margin: 10px;
  }
`;

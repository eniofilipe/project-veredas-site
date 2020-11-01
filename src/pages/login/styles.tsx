import styled from 'styled-components';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const Logo = styled.img`
  width: auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export const SubTitle = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 25px;
`;

export const ButtonLogin = styled(Button)`
  width: 80%;
  height: 62px;
  max-width: 360px;
  margin: 5px;
  align-self: flex-end;
`;

export const ErrorMessage = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.danger};
  text-align: center;
  margin-top: 10px;
`;

export const InputLogin = styled(Input)`
  height: 50px;
  width: 80%;
  max-width: 360px;
  margin: 5px;
`;

export const LoginContainer = styled.div`
  width: 80%;
  max-width: 460px;
  display: flex;
  flex-direction: column;

  > div {
    align-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > span {
      width: 80px;
    }
  }
`;

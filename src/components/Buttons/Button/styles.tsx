import styled from 'styled-components';

export const Button = styled.button<{ clear?: boolean }>`
  color: ${(props) => (props.clear ? '#000' : '#fff')};
  background: ${(props) => (props.clear ? '#fff' : '#2ECC71')};
  border-radius: 8px;
  align-self: center;
  border: 0px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

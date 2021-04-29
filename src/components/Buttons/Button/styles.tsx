import styled from 'styled-components';

export const Button = styled.button<{ clear?: boolean }>`
  color: ${(props) => (props.clear ? '#000' : '#fff')};
  background: ${(props) => (props.clear ? '#fff' : '#017C00')};
  border-radius: 8px;
  align-self: center;
  border: 0px;
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;

  &:hover {
    transition: 0.4s;
    color: ${(props) => (props.clear ? '#fff' : '#fff')};
    background: ${(props) => (props.clear ? '#000' : '#016300')};
    /* border: 1px solid ${(props) => (props.clear ? '#000' : '#017C00')}; */
  }
`;

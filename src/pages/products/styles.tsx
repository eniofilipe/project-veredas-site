import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1%;
`;

export const Logo = styled.img`
  width: auto;
  position: absolute;
  left: 2rem;
  top: 1rem;
`;
export const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
  width: 80%;
  margin-left: 2rem;
  row-gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const WrapperCategory = styled.div`
  background-color: #fff;
  border: 1px solid #444;
  margin: 2rem;
  margin-top: 3rem;
  margin-right: 0;
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
`;
export const Checkbox = styled.input`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  padding-left: 0.4rem;
  font-size: 1.3rem;
`;
export const Wrapper = styled.div`
  body {
    background-color: rgba(196, 196, 196, 0.1);
  }
`;
export const WrapperContent = styled.div`
  display: flex;
`;
export const SearchBar = styled.input`
  height: 2rem;
  width: 30%;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 1rem;
  margin-left: 40%;
`;
export const WrapperIcons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
  gap: 10%;
`;
export const Icon = styled.div`
  color: #fff;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  cursor: pointer;
`;

export default Icon;

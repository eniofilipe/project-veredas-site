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
export const Logo = styled.img`
  width: 16rem;
  position: absolute;
  left: 2rem;
  top: 0.4rem;
`;

export const Wrapper = styled.div`
  body {
    background-color: rgba(196, 196, 196, 0.1);
    height: 110vh;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;
export const Body = styled.body``;

import styled from 'styled-components';

export const Wrapper = styled.main``;

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: rgba(30, 149, 31, 0.4);
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 20%;
`;

export const Title = styled.p`
  white-space: nowrap;
  align-self: center;
  margin: 0 25%;
  font-size: 2.5rem;
`;

export const WrapperContent = styled.div`
  width: 40%;
  margin: 1.5rem auto;
`;
export const Label = styled.p`
  align-self: flex-start;
  font-size: 1.6rem;
`;
export const WrapperItem = styled.div`
  display: flex;
  color: #aa5e5a;
  padding-left: 5%;
  padding-top: 0.4rem;
  justify-content: space-between;
`;
export const WrapperControl = styled.div`
  display: flex;
  gap: 0.4rem;
`;
export const SumButton = styled.button`
  padding: 0.4rem;
  background: transparent;
  outline: none;
  border: 1px solid #aa5e5a;
  border-radius: 4px;
  cursor: pointer;
  ::after {
    content: '+';
    color: #aa5e5a;
  }
`;
export const SubButton = styled.button`
  padding: 0.4rem;
  background: transparent;
  outline: none;
  border: 1px solid #aa5e5a;
  border-radius: 4px;
  cursor: pointer;

  ::after {
    content: '-';
    color: #aa5e5a;
  }
`;
export const Text = styled.p`
  color: #aa5e5a;
  font-size: 1.4rem;
`;
export const Value = styled.p`
  color: #aa5e5a;
  font-weight: bold;
  font-size: 1.4rem;
`;
export const Items = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #aa5e5a;
`;
export const SubTotal = styled.p`
  width: 100%;
  padding: 1rem 0;
  color: #aa5e5a;
  font-size: 1.4rem;
  text-align: right;
`;
export const WrapperDelivery = styled.div`
  border-bottom: 1px solid #aa5e5a;
`;
export const WrapperSelect = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  ${Label} {
    font-size: 1.5rem;
  }
`;
export const Select = styled.select`
  color: #aa5e5a;
  outline: none;
  padding: 0 1rem;
`;
export const Address = styled.div`
  display: flex;
  padding-left: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  ${Text} {
    font-size: 1.2rem;
    width: 70%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 70%;
  margin: 1rem auto;
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
    background: #aa5e5a;
    color: white;
    transition: 0.4s;
  }
`;
export const AcceptButton = styled.button`
  background: rgba(33, 147, 33, 0.55);
  border-radius: 8px;
  height: 4rem;
  width: 6rem;
  border: none;
  color: white;
  font-size: 1.2rem;
  :hover {
    border: 2px solid rgba(33, 147, 33, 0.55);
    background: white;
    color: rgba(33, 147, 33, 0.55);
    font-weight: bold;
    transition: 0.4s;
  }
`;

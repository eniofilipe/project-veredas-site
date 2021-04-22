import styled from 'styled-components';
import Button from '../../Buttons/Button';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.span`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 5px;
`;
export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #6e798c;
  margin: 5px 0;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
`;
export const Price = styled.span`
  font-size: 24px;
  font-weight: 400;
`;
export const Categories = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
`;

export const ImageHeader = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
`;

export const ButtonBuy = styled(Button)`
  width: 80px;
  height: 25px;
`;

export const ButtonRemove = styled.button`
  width: 80px;
  height: 25px;
  color: #2ECC71;
  background: #fff;
  border-radius: 8px;
  align-self: center;
  border: 0px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;

  &:hover {
    color:#fff;
    background: #961913;
    border: 1px solid #961913;
  }
`;


export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ButtonMinus = styled.div`
  cursor: pointer;
  margin-right: 14px;
`;
export const ButtonPlus = styled.div`
  margin-left: 14px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;

export const AddQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

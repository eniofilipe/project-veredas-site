import styled from 'styled-components'
import Button from '../../Buttons/Button'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #552200;
`
export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #6e798c;
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Price = styled.span`
  font-size: 24px;
  font-weight: 400;
`
export const Categories = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin: 2px;
`

export const Container = styled.div`
  width: 260px;
  /* overflow: hidden; */
  height: 430px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  /* border: 1px solid magenta; */
`

export const ImageHeader = styled.img`
  width: 100%;
  height: 50%;
  max-height: 200px;
  border-radius: 8px 8px 0 0;
`

export const ButtonBuy = styled(Button)`
  width: 110px;
  height: 40px;
`

export const ButtonRemove = styled.button`
  width: 110px;
  height: 40px;
  color: #017c00;
  background: #fff;
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
    color: #961913;
    background: #fff;
    border: 1px solid #fff;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 8px; */
  margin-right: 10px;
  /* border: 1px solid magenta; */
`

export const ButtonMinus = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 14px;
`
export const ButtonPlus = styled.button`
  border: none;
  background: none;
  margin-left: 14px;
  cursor: pointer;
`

export const Quantity = styled.span`
  font-weight: bold;
  text-align: center;
  width: 32px;
`

export const AddQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin: 4px;
`

export const AditionalInfo = styled.div`
  text-align: center;
  font-size: 10px;
  margin-top: -6px;
  /* border: 1px solid black; */
`

export const StockBuyWrapper = styled.div`
  display: flex;
  margin: 2px;
  justify-content: space-between;
  align-items: center;
`

export const Stock = styled.span``

export const PriceAndQuantityWrapper = styled.div`
  margin: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

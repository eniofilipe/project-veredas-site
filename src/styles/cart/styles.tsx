/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import Header from '../../components/Header';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

`;

export const Logo = styled.img`

&:nth-child(1) {
  cursor: pointer;
  }
`;

type MenuProps = {
  background?: string;
  position?: number;
};

export const MenuNav = styled.div``;

export const MenuLink = styled.a`
  position: relative;
  color: #552200;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.15rem;
      background-color: #017C00;
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const TitlePage = styled.h1`
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  font-weight: 400;
  font-size: 1.5rem;
  cursor: default;
`;

export const StyledHeader = styled(Header)`
  
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Title = styled.p`
  white-space: nowrap;
  align-self: center;
  margin: 0 25%;
  font-size: 2.5rem;
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

export const WrapperContent = styled.div`
  padding-top: 80px;
  width: 80%;
  margin: 1.5rem auto;

  @media (max-width: 920px){
    width: 90%;
  }
`;

export const Label = styled.span`
  align-self: flex-start;
  color: #016300;
  font-weight: 500;
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-left: 5%;
  margin-top: 0.4rem;
  padding: 1rem;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1442px) {
    padding: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const WrapperControl = styled.div`
   display: flex;
  justify-content: center;
  margin-right: 10px;

  #quantity {
    font-weight: bold;
    text-align: center;
    width: 32px;
  };
`;

export const SumButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 14px;
  ::after {
    content: '+';
  }
`;

export const SubButton = styled.button`
  border: none;
  background: none;
  margin-left: 14px;
  cursor: pointer;
  ::after {
    content: '-';
  }
`;

export const Text = styled.span`
  color: #552200;
  font-size: 1rem;
  max-width: 30rem;
  &#prodNameDesc{
    width: 37.5rem;
    color: #552200;
    margin-right: 4rem;
    margin-left: 1.5rem;
  }
  &#prodPriceDesc{
    color: #552200;
  }
  &#boldPrice{
    font-weight: 600;
    color: green;
  }
  &#corProduto{
    font-weight: 800;
    font-size: 1.2rem;
    color: #552200;
  }

  @media (max-width: 1959px){
    &#prodNameDesc{
      margin-right: 4rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 1710px){
    &#prodNameDesc{
      margin-right: 0rem;
    }
  }

  @media (max-width: 1550px){
    &#prodNameDesc{
      width: 20rem;
    }
  }

  @media (max-width: 1150px){
    &#prodNameDesc{
      width: 14rem;
      margin-right: 0rem;
    }
  }

  @media (max-width: 920px){
    &#prodPriceDesc{
      width: 8rem;
    }
  }

  @media (max-width: 798px){
    &#prodPriceDesc{
      display: none;
      width: 0rem;
    }
    &#prodNameDesc{
      width: 10rem;
    }
  }

  @media (max-width: 550px){
    &#prodNameDesc{
      width: 6rem;
      margin-right: 0rem;
    }
  }

  @media (max-width: 490px){
    &#prodNameDesc{
      width: 6rem;
      margin-right: -2rem;
    }
  }
`;

export const Value = styled.span`
  color: #016300;
  font-size: 1rem;
  padding: 2px;
  width: 12rem;
  text-align: center;
  margin-left: 40px;
  font-weight: 600;
  width: 120px;
`;

export const Items = styled.div`
  margin-top: 1rem;
  padding: 0;
  background: #fff;
  padding-bottom: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const WrapperSelect = styled.div`
  margin-top: 0.5rem;
  background: #fff;
  border-radius: 8px;
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 6%;
  ${Label} {
    color: #552200;
    font-size: 1rem;
    align-self: flex-end;
    font-weight: 400;
  }

  @media (max-width: 610px) {
    justify-content: space-around;
    justify-content: left;
    padding: 0.2rem 1rem 2rem;
    gap: 8%;
  }
`;

export const ContainerPagamento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-left: 5%;
  margin-top: 0.4rem;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 1.5rem 0rem 1rem 1rem;
  gap: 6%;

  @media (max-width: 810px) {
    padding: 1.5rem 0rem 1rem 1rem;
  }

  @media (max-width: 610px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Select = styled.select`
  color: #016300;
  outline: none;
  padding: 0.6rem 1rem 0.5rem 1rem;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
  ${Text} {
    font-size: 1rem;
    width: 90%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CancelButton = styled.button`
  background: #961913;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  width: 24rem;

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #961913;
    cursor: pointer;
  }

  @media (max-width: 1160px) {
    width: 15rem;
  }

  @media (max-width: 640px) {
    width: 12rem;
  }

  @media (max-width: 490px) {
    width: 8rem;
  }
`;

export const AcceptButton = styled.button`
  background: #017C00;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  width: 24rem;

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
    cursor: pointer;
  }

  @media (max-width: 1160px) {
    width: 15rem;
  }

  @media (max-width: 640px) {
    width: 12rem;
  }

  @media (max-width: 490px) {
    width: 8rem;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: #961913;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const WrapperProd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
`;

export const WrapperSubtotal = styled.div`
  margin-top: 1rem;
  margin-left: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 798px){
    margin-left: 1.2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.6rem;
  margin-top: 2px;
  justify-content: space-between;
  padding-right: 1rem;
`;

export const Line = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  height: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 98%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 2.5;

  @media (max-width: 920px){
    margin-right: 2rem;
  }
`;

export const ButtonMinus = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 14px;
  color: #017C00;

  @media (max-width: 920px){
    margin-right: 0rem;
  }
`;

export const ButtonPlus = styled.button`
  border: none;
  background: none;
  margin-left: 14px;
  cursor: pointer;
  color: #017C00;

  @media (max-width: 920px){
    margin-left: 0rem;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
  text-align: center;
  width: 32px;
  color: #552200;
  cursor: default;
`;

export const AddQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin: 4px;
`;

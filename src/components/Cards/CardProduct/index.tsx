import React, { ReactChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import {
  InfoContainer,
  Title,
  SubTitle,
  PriceContainer,
  Price,
  Categories,
  Container,
  ImageHeader,
  ButtonBuy,
  ButtonMinus,
  ButtonPlus,
  Quantity,
  QuantityContainer,
  AddQuantityWrapper,
} from './styles';
import alface from '../../../assets/images/alface.jpeg';
import Money from '../../StylesText/Money';

interface CardProductProps {
  className?: string;
  value: any;
  MinusQuantityOnChange: (e: any) => void;
  PlusQuantityOnChange: (e: any) => void;
  onChange: (e: any) => void;
  name: string;
  comment: string;
  category: string[];
  image?: string;
  quantity: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const cardProduct = ({
  className,
  value,
  name,
  comment,
  onChange,
  MinusQuantityOnChange,
  PlusQuantityOnChange,
  quantity,
  category,
  image,
}: CardProductProps) => (
  <Container>
    <ImageHeader src={`http://${image}`} alt="" />
    <InfoContainer>
      <Title>{name}</Title>
      <SubTitle>{comment}</SubTitle>
      <PriceContainer>
        <Price>
          <Money value={value} />
        </Price>

        <AddQuantityWrapper>
          <QuantityContainer>
            <ButtonMinus onClick={MinusQuantityOnChange}>
              <FontAwesomeIcon icon={faMinus} />
            </ButtonMinus>

            <Quantity>{quantity}</Quantity>
            <ButtonPlus onClick={PlusQuantityOnChange}>
              <FontAwesomeIcon icon={faPlus} />
            </ButtonPlus>
          </QuantityContainer>

          <ButtonBuy onClick={onChange}>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </ButtonBuy>
        </AddQuantityWrapper>
      </PriceContainer>
      <Categories>{category.map((item) => `${item},`)}</Categories>
    </InfoContainer>
  </Container>
);

export default cardProduct;

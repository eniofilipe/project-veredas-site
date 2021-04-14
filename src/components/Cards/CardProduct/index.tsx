import React, { ReactChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
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
} from './styles';
import alface from '../../../assets/images/alface.jpeg';
import Money from '../../StylesText/Money';

interface CardProductProps {
  className?: string;
  value: any;
  onChange: (e: any) => void;
  name: string;
  comment: string;
  category: string[];
  image?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const cardProduct = ({
  className,
  value,
  name,
  comment,
  onChange,
  category,
  image,
}: CardProductProps) => (
  <Container>
    <ImageHeader src={`http://${image}` || alface} alt="" />
    <InfoContainer>
      <Title>{name}</Title>
      <SubTitle>{comment}</SubTitle>
      <PriceContainer>
        <Price>
          <Money value={value} />
        </Price>
        <ButtonBuy onClick={onChange}>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </ButtonBuy>
      </PriceContainer>
      <Categories>{category.map((item) => `${item},`)}</Categories>
    </InfoContainer>
  </Container>
);

export default cardProduct;

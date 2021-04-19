import React, { ReactChildren, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faPlus,
  faMinus,
  faCheckCircle,
  faTrash
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
  ButtonRemove
} from './styles';
import alface from '../../../assets/images/alface.jpeg';
import Money from '../../StylesText/Money';

interface CardProductProps {
  className?: string;
  value: any;
  MinusQuantityOnChange: (e: any) => void;
  PlusQuantityOnChange: (e: any) => void;
  onChange: (e: any) => void;
  handleRemove: (e: any) => void;
  name: string;
  comment: string;
  category: string[];
  image?: string;
  quantity: number;
  inCart?: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const cardProduct = ({
  className,
  value,
  name,
  comment,
  onChange,
  handleRemove,
  MinusQuantityOnChange,
  PlusQuantityOnChange,
  quantity,
  category,
  image,
  inCart
}: CardProductProps) => {
  const [HoverIcon, setHoverIcon] = useState(false)

  return(
  <Container>
    <ImageHeader src={`http://${image}` || alface} alt="" />
    <InfoContainer>
      <Title>{name}</Title>
      <SubTitle>{comment}</SubTitle>
      <PriceContainer>
        <Price>
          <Money value={value} />
        </Price>

        {!inCart ? <AddQuantityWrapper>
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
        </AddQuantityWrapper> :
         <AddQuantityWrapper>
         <ButtonRemove  onMouseOver={() => setHoverIcon(true)} onMouseOut={() => setHoverIcon(false)} onClick={handleRemove}>
           <FontAwesomeIcon  icon={ HoverIcon ?  faTrash : faCheckCircle } />
         </ButtonRemove>
       </AddQuantityWrapper>
        }

      </PriceContainer>
      <Categories>{category.map((item) => `${item},`)}</Categories>
    </InfoContainer>
  </Container>
)};

export default cardProduct;

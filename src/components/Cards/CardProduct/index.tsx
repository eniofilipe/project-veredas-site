import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingBasket,
  faPlus,
  faMinus,
  faCheckCircle,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

import {
  InfoContainer,
  Title,
  SubTitle,
  Price,
  Categories,
  Container,
  ImageHeader,
  ButtonBuy,
  ButtonMinus,
  ButtonPlus,
  Quantity,
  QuantityContainer,
  ButtonRemove,
  AditionalInfo,
  StockBuyWrapper,
  Stock,
  PriceAndQuantityWrapper
} from './styles'
import produto from '../../../assets/images/produto.png'
import Money from '../../StylesText/Money'

interface CardProductProps {
  className?: string
  value: any
  MinusQuantityOnChange: (e: any) => void
  PlusQuantityOnChange: (e: any) => void
  onChange: (e: any) => void
  handleRemove: (e: any) => void
  name: string
  comment: string
  category: string[]
  image?: string
  quantity: number
  inCart?: boolean
  availableStock: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CardProduct({
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
  availableStock,
  image,
  inCart
}: CardProductProps) {
  const [HoverIcon, setHoverIcon] = useState(false)

  return (
    <Container>
      {image === null ? (
        <ImageHeader src={produto} alt="" />
      ) : (
        <ImageHeader src={`${image}`} alt="" />
      )}
      <AditionalInfo>Imagem meramente ilustrativa</AditionalInfo>
      <InfoContainer>
        <Title>{name}</Title>
        <SubTitle>{comment}</SubTitle>
        {/* <PriceContainer> */}

        {!inCart ? (
          <>
            <PriceAndQuantityWrapper>
              <Price>
                <Money value={value} />
              </Price>
              <QuantityContainer>
                <ButtonMinus onClick={MinusQuantityOnChange}>
                  <FontAwesomeIcon icon={faMinus} />
                </ButtonMinus>

                <Quantity>{quantity}</Quantity>
                <ButtonPlus onClick={PlusQuantityOnChange}>
                  <FontAwesomeIcon icon={faPlus} />
                </ButtonPlus>
              </QuantityContainer>
            </PriceAndQuantityWrapper>

            <StockBuyWrapper>
              <Stock>Estoque: {availableStock}</Stock>
              <ButtonBuy onClick={onChange}>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </ButtonBuy>
            </StockBuyWrapper>
          </>
        ) : (
          <>
            <PriceAndQuantityWrapper>
              <Price>
                <Money value={value} />
              </Price>
            </PriceAndQuantityWrapper>

            <StockBuyWrapper>
              <Stock>Estoque: {availableStock}</Stock>
              <ButtonRemove
                onMouseOver={() => setHoverIcon(true)}
                onMouseOut={() => setHoverIcon(false)}
                onClick={handleRemove}
              >
                <FontAwesomeIcon icon={HoverIcon ? faTrash : faCheckCircle} />
              </ButtonRemove>
            </StockBuyWrapper>
          </>
        )}
        <Categories>{category.map((item) => `${item},`)}</Categories>
      </InfoContainer>
    </Container>
  )
}

/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import styled, { css } from 'styled-components'
import Header from '../../components/Header'

export const Logo = styled.img`
  &:nth-child(1) {
    cursor: pointer;
  }
`

export const MenuNav = styled.div``
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
      background-color: #017c00;
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
`

export const StyledHeader = styled(Header)`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #552200;
  cursor: default;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight: 400;
  @media (max-width: 1280px) {
    font-size: 1rem;
  }
`

export const MenuItem = styled.h1`
  font-size: 1.5rem;
  color: #552200;
  cursor: default;
  margin-right: 2rem;
  margin-left: 2rem;
  font-weight: 400;
  cursor: pointer;
`

export const TitlePage = styled.h1`
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  font-weight: 400;
  font-size: 1.5rem;
  cursor: default;
`

export const HeaderWrapper = styled.div``

export const Button = styled.button`
  justify-content: center;
  background: #017c00;
  color: #fff;
  border: 1px solid #017c00;
  border-radius: 8px;
  padding: 1rem 2rem;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
    border: 1px solid #016300;
    cursor: pointer;
  }
  #button-passwd {
    margin-top: 400px;
    color: black;
  }

  @media (max-width: 600px) {
    width: 6rem;
    height: 3rem;
    padding: 1rem 1rem;
    &#menor {
      padding: 1rem 1rem;
    }
    &#segundatela {
      width: 6rem;
      height: 3rem;
      padding: 1rem 1rem;
    }
  }
`

export const Wrapper = styled.div``

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  padding-top: 80px;
  padding-left: 14%;
  padding-right: 14%;
  justify-content: space-between;
  @media (max-width: 1280px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const WrapperMenu = styled.div`
  display: flex;
  right: 1rem;
  top: 2rem;
  gap: 3rem;
  border: 1px solid blue;
`
export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
  padding-bottom: 2rem;

  ${Title} {
    text-align: left;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
  }
  padding-right: 3rem;
  @media (max-width: 1280px) {
    width: 100%;
  }
`
export const Input = styled.input`
  margin-left: auto;
  width: 60%;
  background: #f4f4f4;
  border: 2px solid #c3c3c3;
  height: 60px;
  border-radius: 0.4rem;
  outline: none;
  font-size: 1.4rem;
  color: #552200;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 14px;
  @media (max-width: 1280px) {
    font-size: 1rem;
    height: 40px;
    width: 100%;
    /* padding: 0; */
    margin: 0;
  }
`
export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-left: 14%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  ${Title} {
    text-align: left;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
    margin-left: 16%;
  }
  @media (max-width: 1280px) {
    /* width: 72%; */
  }
  @media (max-width: 1280px) {
    font-size: 1rem;
  }
`

export const Label = styled.p`
  font-size: 1.4rem;
  color: #552200;
  margin-top: 14px;
  @media (max-width: 1280px) {
    font-size: 1rem;
  }
`

export default Label

export const WrapperController = styled.div``

export const Form = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
  }
`

export const WrapperDataAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 30%;
  padding-right: 30%;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 1280px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`

export const CardHeader = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  ${Button} {
    padding: 0rem 2rem 0rem 2rem;
    margin-left: none;
    height: 54px;
  }
`

export const EditButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${Button} {
    width: 114px;
    font-size: 0.75rem;
    text-align: center;
    margin-left: 0;
    padding: 0;
  }

  ${Button}:nth-child(1) {
    background-color: #017c00;
    border: 1px solid #017c00;
    &:hover {
      color: #fff;
      background: #016300;
      border: 1px solid #017c00;
      cursor: pointer;
    }
  }

  ${Button}:nth-child(2) {
    color: #fff;
    background-color: #961913;
    border: 1px solid #961913;
    &:hover {
      color: #fff;
      background: #78140f;
      border: 1px solid #78140f;
      cursor: pointer;
    }
  }
`

export const Row = styled.div`
  display: flex;
  ${Button} {
    width: 100%;
    margin-top: 2.2rem;
  }
  &#field {
    margin-top: 40px;
  }

  ${EditButtons} {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${Button} {
      width: 30%;
      margin-top: 0rem;
      font-size: 1rem;
      padding: 1rem 2rem 1rem 2rem;
    }
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
    flex-direction: column;
    &#field {
      margin-top: 0px;
    }
    align-items: center;
    justify-content: center;
  }
`

/* eslint-disable indent */
import styled, { css } from 'styled-components'
import Input from '../../components/Inputs/Input'
import Header from '../../components/Header'

export const Wrapper = styled.div``

export const Logo = styled.img`
  &:nth-child(1) {
    cursor: pointer;
  }
`

type MenuProps = {
  background?: string
  position?: number
}

export const StyledHeader = styled(Header)`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

export const HeaderWrapper = styled.div<MenuProps>`
  ${({ position }) => css`
    position: relative;
    opacity: ${position !== 0 ? 1 : 0.8};
    background-color: ${position !== 0
      ? 'rgba(250, 250, 250, 1)'
      : 'rgba(250, 250, 240, 0.8)'};
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  `}
`

export const Button = styled.button`
  background: #017c00;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    transition: 0.4s;
    color: #fff;
    background: #016300;
    cursor: pointer;
  }

  @media (max-width: 442px) {
    padding: 0.8rem 0.6rem 0.8rem 0.6rem;
    margin-left: 1rem;
    margin-right: -2rem;
  }
`

export const ButtonLogin = styled.button`
  background: #017c00;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: 1px solid #fff;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  width: 29rem;
  height: 3.4rem;

  &:hover {
    color: #fff;
    background: #016300;
    border: 1px solid #016300;
    cursor: pointer;
  }

  @media (max-width: 581px) {
    width: 10rem;
    height: 3.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding-bottom: 16.5vh;
`

export const InputLogin = styled(Input)`
  height: 50px;
  width: 80%;
  max-width: 360px;
  margin: 5px 0;
  outline: none;
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
  background: #fff;
  border: 2px solid #c3c3c3;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  height: 60px;
  padding-left: 14px;
  color: #552200;
`

export const LoginContainer = styled.div`
  width: 80%;
  max-width: 460px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  color: #441b00;
  > div {
    align-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #552200;
    > span {
      width: 80px;
    }
  }
  .login-icon {
    color: #016300;
  }
  .botoes {
    flex-direction: column;
    padding-top: 0rem;
    align-items: center;
  }
`

export const SubTitle = styled.a`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  cursor: pointer;
  color: #017c00;
`

export const Icon = styled.div`
  width: 3rem;
  height: 1.5rem;
`

export const MenuNav = styled.div`
  margin-right: 4rem;
  @media (max-width: 658px) {
    margin-right: 2rem;
  }
`

export const MenuLink = styled.a`
  position: relative;
  color: #552200;
  font-size: 1.5rem;
  margin: 0.3rem 0.8rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
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

  @media (max-width: 860px) {
    &#home {
      display: none;
    }
  }
`

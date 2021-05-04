/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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

export const MenuNav = styled.div`
  /* margin-right: 4rem; */
`;

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

export const Header = styled.menu<MenuProps>`
  ${({ background }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
    justify-content: space-between;
    background-color: ${background && background === 'white'
      ? '#FFF'
      : '#FFF'};
  `}


  ${Logo} {
    width: 200px;
  }
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

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
`;

export const TitleDesenvolvedores = styled.p`
  font-size: 2rem;
  color: #444;
  cursor: default;
  display: flex;
  width: 50%;
`;

export const WrapperBody = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  .card{
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    min-height: 250px;
    width: 512px;
    border-radius: 10px;
    margin: 2rem;
    gap: 2rem;
    img{
      width: 200px;
      min-height: 200px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }
    .info{
      h1{
        font-size: 1.5rem;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        color: #552200;
        &#campus{
        font-size: 1.2rem;
        margin-top: -2rem;
      }
      }
      a{
        text-decoration: none;
        width: 100%;
        color: #000c00;
        &:hover {
          color: #000000;
        }
        font-size: 1.2rem;
      }

      width: 100%;
      display:flex;
      flex-direction: column;
    }
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Body = styled.body``;

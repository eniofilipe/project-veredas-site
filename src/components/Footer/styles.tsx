import styled, { css } from 'styled-components';



export const Logo = styled.img`
`;

export const WrapperFooter = styled.footer`
  height: 20vh;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  #footer-responsive{
    display:flex;
  }
  div p{
    color: #552200;
    font-size: 1.1rem;
  }
  div h1{
    font-weight: bold;
    color: #017C00;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  #info{
    text-align: center;
    margin-left: 12.3rem;
    align-self: inherit;
  }
  #logo{
    margin-right: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  #contato{
    margin-left: 8rem;
    text-align: center;
  }
   ${Logo}:nth-child(1) {
    width: 250px;
    padding: 0.8rem;
  }
  ${Logo}:nth-child(2) {
    width: 120px;
    padding: 1rem;
  }
  ${Logo}:nth-child(3) {
    width: 150px;
    padding: 1rem;
    border-radius: 30px;
  }

  @media (max-width: 1367px) {
    height: 38vh;
    padding-bottom: 2rem;
    #info{
      text-align: center;
      margin-left: 0rem;
      margin-top: 4.2rem;
      padding-left: 1rem;
    }
    #logo{
      margin-right: 4rem;
    }
    #contato{
      margin-top: 4rem;
    }
   ${Logo}:nth-child(1) {
    width: 240px;
  }
  ${Logo}:nth-child(2) {
    width: 110px;
  }
  ${Logo}:nth-child(3) {
    width: 140px;
  }
  }
  @media (max-width: 1200px) {
    height: 40vh;
    #info{
      margin-top: 1rem;
    }
    #logo{
      margin-top: 0rem;
    }
    #contato{

      margin-left: 1rem;
    }

  }
  @media (max-width: 1100px) {
    height: 50vh;
    #info{
      margin-top: 4rem;
      align-self: start;
    }
    #logo{
      margin-top: 3rem;
      align-self: end;
    }
    #contato{
      margin-left: 1rem;
    }
  }

  @media (max-width: 1000px) {
    height: 52vh;
    #info{
      margin-top: 1rem;
      align-self: start;
    }
    #logo{
      margin-top: 0rem;
      align-self: end;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    #contato{
      margin-left: 1rem;
    }
  }
  @media (max-width: 720px) {
    #footer-responsive{
      display: block;
      width: 100vw;
    }
  }
  @media (max-width: 530px){
    flex-direction: column;
    #footer-responsive{
      display: flex;
      flex-direction: column;

    }
    #logo{
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 514px){
    height: 110vh;
    justify-content: inherit;
    #logo{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content:flex-start;
    }
  }
`;

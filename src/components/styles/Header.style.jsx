import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000c1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 20px;
  }

  span {
    color: #f8067b;
    margin-left: 20px;
  }
`;

export const OpenMobileLinks = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding-top: 6px;
  font-size: 1.3rem;
  cursor: pointer;

  @media screen and (min-width: 1150px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  span {
    padding: 0 18px;
    font-size: 14px;
  }

  @media only screen and (max-width: 1150px) {
    span {
      display: none;
    }
    span.jobs {
      display: flex;
      font-weight: bold;
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const NavMobile = styled(Nav)`
  flex-direction: column;
  align-items: flex-start;
  align-items: stretch;
  padding: 10px 0px;
  margin-bottom: 20px;
  transition: all 0.5s linear;
  display: none;

  @media only screen and (max-width: 1150px) {
    display: flex;
    padding: 20px 0 0px;
    button {
      display: none;
    }
    span {
      display: flex;
      border-bottom: solid 1px #fff;
      line-height: 40px;
      width: 100%;
      font-size: 16px;
    }
    .last {
      margin-top: 10px;
    }
    span.jobs {
      font-weight: normal;
      display: none;
      @media screen and (max-width: 700px) {
        display: flex;
      }
    }
    @media screen and (max-width: 450px) {
      display: flex;

      button {
        display: flex;
        font-size: 20px;
        margin: 0px 10px 10px;
        justify-content: center;
      }
    }
  }
`;

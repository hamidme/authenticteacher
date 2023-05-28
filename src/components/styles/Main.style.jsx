import { styled } from "styled-components";
import { PopularSearchLists } from "./Hero.style";

export const TabToggler = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const StyleTabs = styled.p`
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  color: #f8067b;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #f8067b;
    opacity: 1;
  `}
`;

export const LocationLists = styled(PopularSearchLists)`
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
`;

export const CategoriesLists = styled(PopularSearchLists)`
  justify-content: center;
  /* display: none; */
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
`;

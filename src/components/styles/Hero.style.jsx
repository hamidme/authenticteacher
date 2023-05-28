import { styled } from "styled-components";
import { Button } from "../styles/Button.style";

export const StyleHero = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;

export const StyleSearchHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchDes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchHeading = styled.h1`
  max-width: 1000px;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.5;
  color: #1c2020;
`;
export const SearchTagLine = styled.p`
  color: #525252;
  margin-top: 15px;
`;

export const SearchBars = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const SearchArea = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  input {
    padding: 20px;
    border-color: transparent;
    margin-top: 10px;
    border-right: 1px solid #e4e4e4;
    &:focus {
      outline: none;
    }
  }
`;

export const SearchBarHeadings = styled(SearchTagLine)`
  font-size: 14px;
`;

export const SearchButton = styled(Button)`
  margin: 10px 0 0;
  border-color: transparent;
  font-size: 1rem;
  cursor: pointer;
`;

export const PopularSearchLists = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`;
export const PopularSearchButton = styled.section`
  display: flex;
  align-items: center;
  ul {
    flex: 2;
    margin-right: 50px;
  }
  button {
    flex: 1;
  }
`;

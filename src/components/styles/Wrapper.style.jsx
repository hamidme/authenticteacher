import { styled } from "styled-components";

export const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled(Wrapper)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000c1;
`;

export const HeroWrapper = styled(Wrapper)`
  max-width: 1280px;
  margin: 94px auto 0;
  padding: 0 10px;
  height: calc(100vh - 100px);
`;

export const MainWrapper = styled(Wrapper)`
  max-width: 1280px;
  /* margin: 94px auto 0; */
  background-color: #f7f7f7;
  padding: 0 10px;
  height: calc(100vh - 94px);
`;

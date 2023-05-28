import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  Container,
  HeaderContainer,
  HeroContainer,
  MainContainer,
} from "./components/styles/Container.style";
import {
  MainWrapper,
  HeaderWrapper,
  HeroWrapper,
} from "./components/styles/Wrapper.style";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <HeroContainer>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
      </HeroContainer>

      <MainContainer>
        <MainWrapper>
          <Main />
        </MainWrapper>
      </MainContainer>
    </>
  );
}

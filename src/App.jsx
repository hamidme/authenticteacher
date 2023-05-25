import React from "react";
import Header from "./components/Header";
import {
  Container,
  HeaderContainer,
} from "./components/styles/Container.style";

export default function App() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <h2></h2>
      </Container>
    </>
  );
}

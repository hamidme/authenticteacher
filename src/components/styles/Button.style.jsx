import { styled } from "styled-components";

export const Button = styled.button`
  padding: 6px 10px;
  background-color: ${({ variant }) =>
    variant === "outline" ? "#fff" : "#f8067b"};
  margin: 0 10px;
  border-radius: 5px;
  color: #fff;
`;
export const RegisterButton = styled(Button)`
  padding: 6px 10px;
  background-color: ${({ variant }) =>
    variant === "outline" ? "#fff" : "#f8067b"};
  margin: 0 10px;
  border: solid 1px #f8067b;
  border-radius: 5px;
  color: ${({ variant }) => (variant !== "outline" ? "#fff" : "#f8067b")};
  cursor: pointer;
  transition: all 0.25s linear 0s;
  &:hover {
    background-color: ${({ variant }) =>
      variant !== "outline" ? "#fff" : "#f8067b"};
    color: ${({ variant }) => (variant === "outline" ? "#fff" : "#f8067b")};
  }
`;

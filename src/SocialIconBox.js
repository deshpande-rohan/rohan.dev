import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialIconBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  padding: 2px 4px;
  font-size: 30px;
  background: ${({ dark }) => (dark ? "transparent" : "#DBDBDB")};
  color: ${({ fill }) => (fill ? fill : "white")};
  border-radius: ${({ rounded }) => (rounded ? "100%" : "15px")};
  box-shadow: ${({ dark }) =>
    dark
      ? "none"
      : "inset -2px -2px 5px rgba(255, 255, 255, 0.55), inset 2px 2px 5px rgba(0, 0, 0, 0.21)"};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s ease-out;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    transform: translateY(-4px) scale(1.06);
  }

  @media only screen and (max-width: 460px) {
    font-size: 27px;
  }
`;

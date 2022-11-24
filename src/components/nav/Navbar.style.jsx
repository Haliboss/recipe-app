import styled from "styled-components"
import Flex from "../GlobalStyles/Flex.styled"
import { Link } from "react-router-dom"

export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  `
export const Brand = styled(Link)`
  color:${({ theme }) => theme.colors.logoColor};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  padding: 1rem 0;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
  `;

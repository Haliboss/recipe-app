import styled from "styled-components";
import Flex from "../GlobalStyles/Flex.styled";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;
export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.logoColor};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  padding: 1rem 0;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;    
    max-height: ${({ open }) => open ? "400px" : "0"};
    overflow: hidden;
  }
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.linkColor};
  text-align: center;
  text-decoration: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #ff0055;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
`;

export const NavLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;

  &:hover {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
    text-decoration: none;
  }

  &.active {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  list-style: none;

  padding: 0;
  height: 100%;
  justify-content: center;
  align-items: center;

  a {
    border: 1px solid transparent;
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
  }
  a:hover,
  a:active {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
  }

  button {
    cursor: pointer;
    border: 1px solid #292929;
    color: #292929;
    background: transparent;
    padding: 0.5rem;
    font: inherit;

    :hover,
    :active {
      background: #292929;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  li {
    margin: 1rem;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010686;
  }
`;

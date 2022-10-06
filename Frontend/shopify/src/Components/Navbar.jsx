import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const Nav = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 1px 15px;
  align-items: center;
  /* background-image: linear-gradient(to right, #2cd4d9, #5333ed); */
  background-color: #5333ed;
  color: white;
  z-index: 999;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);

`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  .cart__icon {
    color: white;
  }
  .cart__icon:hover {
    text-decoration: none;
    cursor: pointer;
    color: gold;
  }
`;
const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  h1 {
    color: white;
    font-size: 15px;
  }
  h1:hover {
    text-decoration: none;
    cursor: pointer;
    color: #3ee83e;
  }

`;
const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;
const SearchInput = styled.div`
  display: flex;
  min-width:80px;
  align-items: center;
  .input {
    padding-bottom: 20px;
  }
  .searchBar {
    min-width:80px;
    background-color: transparent;
    height: 20px;
    border: solid white;
    border-bottom-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
  }
`;

const Navbar = (props) => {
  const searchInput = props.searchInput;
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    searchInput(searchTerm);
  }, [searchInput, searchTerm]);
  return (
    <Nav>
      <Link to="/" className="cart__icon">
        <Logo>Shopify</Logo>
      </Link>
      {props.searchDisplay && (
        <SearchInput>
          <DebounceInput
            debounceTimeout={500}
            value={searchTerm}
            onChange={searchHandle}
            className="searchBar"
          />
          <SearchIcon />
        </SearchInput>
      )}
      <RightContainer>
        <Link to="/" className="cart__icon">
          <h1>Products</h1>
        </Link>
        <Cart>
          <Link to="/cart" className="cart__icon">
            <ShoppingCartOutlinedIcon />
          </Link>
          <span>{props.count}</span>
        </Cart>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;

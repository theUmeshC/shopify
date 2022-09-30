import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const Nav = styled.div`
  height: 10vh;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 1px 15px;
  align-items: center;
  background-image: linear-gradient(to right, #2cd4d9, #5333ed);
  position: sticky;
  top: 0;
  color: white;
  z-index: 999;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 15px;
    position: relative;
    top: -9px;
  }
  .cart__icon {
    color: white;
  }
  .cart__icon:hover {
    text-decoration: underline;
  }
`;
const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  h1 {
    font-size: 15px;
  }
  .cart__icon {
    color: white;
  }
  .cart__icon:hover {
    text-decoration: underline;
  }
`;
const Logo = styled.h1`
  font-size: 30px;
  color: #5333ed;
`;
const SearchInput = styled.div`
  /* padding-bottom: 20px; */
  display: flex;
  align-items: center;
  .input {
    padding-bottom: 20px;
  }
`;
const Navbar = (props) => {
  const seacrchInput = props.searchInput; 
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    seacrchInput(searchTerm);
  }, [seacrchInput,searchTerm]);
  return (
    <Nav>
      <Link to="/" className="cart__icon">
        <Logo>Shopify</Logo>
      </Link>
      <SearchInput>
        {/* <Input
          placeholder="Search"
          sx={{ color: "white" }}
          value={searchTerm}
          onChange={searchHandle}
        /> */}
        <DebounceInput
          debounceTimeout={500}
          value={searchTerm}
          onChange={searchHandle}
        />
        <SearchIcon />
      </SearchInput>
      <RightContainer>
        <Link to="/" className="cart__icon">
          <h1>Products</h1>
        </Link>
        <Cart>
          <Link to="/cart" className="cart__icon">
            <ShoppingCartOutlinedIcon />
            <span>{props.count}</span>
          </Link>
        </Cart>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;

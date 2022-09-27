import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";

const Navbar = () => {
  const Nav = styled.div`
    height: 10vh;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 1px 15px;
    align-items: center;
    background-image: linear-gradient(to right, #2cd4d9, #5333ed );
    position: sticky;
    top: 0;
    color: white;
  `;
  const Cart = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    span{
        font-size: 15px;
        position: relative;
        top: -9px;
    }
  `;
  const RightContainer = styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    h1{
        font-size: 20px;
    }
  `;
  const Logo = styled.h1`
    font-size: 30px;
    color: #5333ed  ;
  `
  const SearchInput = styled.div`
    /* padding-bottom: 20px; */
    display: flex;
    align-items: center;
    .input{
      padding-bottom: 20px;
    }
  `
  return (
    <Nav>
        <Logo>Shopify</Logo>
        <SearchInput>
        <Input placeholder="Search" sx={{color:'white'}}/>
        <SearchIcon/>
        </SearchInput>
      <RightContainer>
        <h1>Products</h1>
        <Cart>
          <ShoppingCartOutlinedIcon className="cart__icon" />
          <span>1</span>
        </Cart>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;

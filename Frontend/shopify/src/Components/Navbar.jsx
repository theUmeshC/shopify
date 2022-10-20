/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { CartState } from '../Context/CartContext/context';
import { Nav, Cart, RightContainer, Logo, SearchInput } from '../UI/NavBar';
import { DataState } from '../Context/DataContext/dataContext';

const Navbar = (props) => {
  const { productDataKey, filteredDataKey } = DataState();
  const [productData,] = productDataKey;
  const [, setFilteredData] = filteredDataKey;
  const [searchTerm, setSearchTerm] = useState('');
  const [cartState] = CartState();
  let total = 0;
  cartState.map((value) => {
    return (total += value.qty);
  });
  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
    const product = e.target.value;
    if (product.length > 0) {
      let filteredItems = [];
      const filterItem = productData.filter((item) => {
        return (
          item.color.toLowerCase() === product.toLowerCase() ||
          item.type.toLowerCase() === product.toLowerCase() ||
          item.price.toString() === product ||
          item.gender.toLowerCase() === product.toLowerCase()
        );
      });
      filteredItems.push(...filterItem);
      setFilteredData(filteredItems);

    } else {
      setFilteredData(productData);
    }
  };
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
          <span>{total}</span>
        </Cart>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;

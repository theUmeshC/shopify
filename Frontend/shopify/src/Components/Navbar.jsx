/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Nav, Cart, RightContainer, Logo, SearchInput,
} from '../UI/NavBar';
import { updateFilteredData } from '../Store/productSlice';

function Navbar({ searchDisplay }) {
  const cartCount = useSelector((state) => state.cartReducers.totalCount);
  const productDataRedux = useSelector((state) => state.productReducers.productData);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
    const product = e.target.value;
    if (product.length > 0) {
      const filteredItems = [];
      const filterItem = productDataRedux.filter((item) => (
        item.color.toLowerCase() === product.toLowerCase()
          || item.type.toLowerCase() === product.toLowerCase()
          || item.price.toString() === product
          || item.gender.toLowerCase() === product.toLowerCase()
      ));
      filteredItems.push(...filterItem);
      dispatch(updateFilteredData(filteredItems));
    } else {
      dispatch(updateFilteredData(productDataRedux));
    }
  };
  return (
    <Nav>
      <Link to="/" className="cart__icon">
        <Logo>Shopify</Logo>
      </Link>
      {searchDisplay && (
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
          <span>{cartCount}</span>
        </Cart>
      </RightContainer>
    </Nav>
  );
}

Navbar.propTypes = {
  searchDisplay: PropTypes.bool.isRequired,
};

export default Navbar;

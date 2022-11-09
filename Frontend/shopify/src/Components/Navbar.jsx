import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredData } from '../Store/productSlice';
import useStyles from '../UI/NavbarStyles';

function Navbar({ searchDisplay }) {
  const classes = useStyles();
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
    <div className={classes.navContainer}>
      <Link to="/">
        <div className={classes.navbarLogo}>Shopify</div>
      </Link>
      {searchDisplay && (
        <div className={classes.navbarSearchInput}>
          <DebounceInput
            debounceTimeout={500}
            value={searchTerm}
            onChange={searchHandle}
            className="searchBar"
          />
          <SearchIcon />
        </div>
      )}
      <div className={classes.navbarRightContainer}>
        <Link to="/" className="cart__icon">
          <h1>Products</h1>
        </Link>
        <div className={classes.navCart}>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
          <span>{cartCount}</span>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  searchDisplay: PropTypes.bool.isRequired,
};

export default Navbar;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Nav, Cart, RightContainer, Logo, SearchInput,
} from '../UI/NavBar';
import { updateFilteredData } from '../Store/productSlice';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  searchHandle = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
    const product = e.target.value;
    if (product.length > 0) {
      const filteredItems = [];
      const filterItem = this.props.productData.filter((item) => (
        item.color.toLowerCase() === product.toLowerCase()
          || item.type.toLowerCase() === product.toLowerCase()
          || item.price.toString() === product
          || item.gender.toLowerCase() === product.toLowerCase()
      ));
      filteredItems.push(...filterItem);
      this.props.updateFilteredData(filteredItems);
    } else {
      this.props.updateFilteredData(this.props.productData);
    }
  };

  render() {
    return (
      <Nav>
        <Link to="/" className="cart__icon">
          <Logo>Shopify</Logo>
        </Link>
        {this.props.searchDisplay && (
          <SearchInput>
            <DebounceInput
              debounceTimeout={500}
              value={this.state.searchTerm}
              onChange={this.searchHandle}
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
            {this.props.cartReducers.totalCount}
          </Cart>
        </RightContainer>
      </Nav>
    );
  }
}

Navbar.propTypes = {
  searchDisplay: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducers } = state;
  const { productReducers } = state;
  const { productData, filteredData } = productReducers;
  return { cartReducers, productData, filteredData };
};

const mapDispatchToProps = { updateFilteredData };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

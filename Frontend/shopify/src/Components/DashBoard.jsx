/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import {
  Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import HomeContainer from '../UI/Dashboard';
import { addItemToCart } from '../Store/cartSlice';
import { loadData } from '../Store/productSlice';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addItemTOCartHandler = (id, product) => {
    const { filteredData } = this.props;
    this.props.addItemToCart(product);
    const existingDataItemIndex = filteredData.findIndex(
      (c) => c.id === product.id,
    );
    const existingItem = filteredData[existingDataItemIndex];
    let updatedItems;
    if (existingItem.quantity >= 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...filteredData];
      updatedItems[existingDataItemIndex] = updatedItem;
    } else {
      toast.error('🦄 Out of Stock!');
      updatedItems = [...filteredData];
    }
    this.props.loadData(updatedItems);
  };

  render() {
    const { loading, filteredData } = this.props;
    return (
      <HomeContainer>
        <Grid container wrap="wrap" className="grid__wrapper">
          {(loading ? Array.from(new Array(6)) : filteredData).map(
            (item) => (
              <Box className="card1" key={uuidv4()}>
                {item ? (
                  <img alt={item.title} src={item.imageURL} className="card-img" />
                ) : (
                  <Skeleton animation="wave" variant="rectangular" className="card-img" />
                )}
                {item ? (
                  <Box sx={{ pl: 1 }} className="card-info">
                    <div>
                      <Typography gutterBottom variant="body2" className="text-title">
                        {item.name}
                      </Typography>
                      <div className="text-details">
                        <Typography
                          display="block"
                          variant="caption"
                          color="text.secondary"
                          className="text-detail"
                        >
                          {`${item.gender}|${item.type}`}
                        </Typography>
                        <Typography
                          display="block"
                          variant="caption"
                          color="text.secondary"
                          className="text-detail"
                        >
                          {`₹${item.price}`}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className="card-footer"
                    >
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {`Qty:${item.quantity}`}
                      </Typography>
                      <IconButton aria-label="delete" size="small" onClick={() => this.addItemTOCartHandler(item.id, item)}>
                        <AddShoppingCartIcon className="cart__icon" />
                      </IconButton>
                    </div>
                  </Box>
                ) : (
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </Box>
                )}
              </Box>
            ),
          )}
        </Grid>
      </HomeContainer>
    );
  }
}

DashBoard.propTypes = {
  loading: PropTypes.bool.isRequired,
  filteredData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducers } = state;
  const { productReducers } = state;
  const { productData, filteredData } = productReducers;
  return { cartReducers, productData, filteredData };
};

const mapDispatchToProps = { addItemToCart, loadData };

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

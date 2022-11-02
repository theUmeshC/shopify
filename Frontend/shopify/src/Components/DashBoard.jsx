/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prop-types */
import {
  Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HomeContainer from '../UI/Dashboard';
import { productDataContext } from '../Context/DataContext/dataContext';

export default class DashBoard extends Component {
  static contextType = productDataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  addItemTOCartHandler = (id, product) => {
    this.props.onItemAddedTOCart(product);
    const existingDataItemIndex = this.context.dataState.filteredData.findIndex(
      (c) => c.id === product.id,
    );
    const existingItem = this.context.dataState.filteredData[existingDataItemIndex];
    let updatedItems;
    if (existingItem.quantity >= 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...this.context.dataState.filteredData];
      updatedItems[existingDataItemIndex] = updatedItem;
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: 0,
      };
      updatedItems = [...this.context.dataState.filteredData];
      updatedItems[existingDataItemIndex] = updatedItem;
    }
    this.context.updateState(updatedItems);
  };

  render() {
    return (
      <HomeContainer>
        <Grid container wrap="wrap" className="grid__wrapper">
          {(this.props.loading ? Array.from(new Array(6)) : this.context.dataState.filteredData).map(
            (item) => (
              <Box className="card1" key={uuidv4()} sx={{ width: 210, marginRight: 6, my: 5 }}>
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

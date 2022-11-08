import {
  Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { loadData } from '../Store/productSlice';
import { addItemToCart } from '../Store/cartSlice';
import HomeContainer from '../UI/Dashboard';

function Dashboard({ searchDisplay, loading }) {
  const filteredProductData = useSelector((state) => state.productReducers.filteredData);
  const dispatch = useDispatch();
  useEffect(() => {
    searchDisplay(true);
  }, []);

  const addItemTOCartHandler = (product) => {
    dispatch(addItemToCart(product));
    const existingDataItemIndex = filteredProductData.findIndex((c) => c.id === product.id);
    const existingItem = filteredProductData[existingDataItemIndex];
    let updatedItems;
    if (existingItem.quantity >= 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...filteredProductData];
      updatedItems[existingDataItemIndex] = updatedItem;
    } else {
      toast.error('🦄 Out of Stock!');
      updatedItems = [...filteredProductData];
    }
    dispatch(loadData(updatedItems));
  };

  return (
    <HomeContainer>
      <Grid container wrap="wrap" className="grid__wrapper">
        {(loading ? Array.from(new Array(8)) : filteredProductData).map((item) => (
          <Box className="card1" key={Math.random()} sx={{ width: 210, marginRight: 6, my: 5 }}>
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
                      {`₹${item.price}.00`}
                    </Typography>
                  </div>
                </div>
                <div className="card-footer">
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {`Qty:${item.quantity}`}
                  </Typography>
                  <IconButton aria-label="delete" size="small" onClick={() => addItemTOCartHandler(item)}>
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
        ))}
      </Grid>
    </HomeContainer>
  );
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchDisplay: PropTypes.func.isRequired,
};

export default Dashboard;

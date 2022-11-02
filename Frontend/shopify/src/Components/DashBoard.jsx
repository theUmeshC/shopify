import {
  Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import HomeContainer from '../UI/Dashboard';
import { DataState } from '../Context/DataContext/dataContext';

function Dashboard({ searchDisplay, onItemAddedTOCart, loading }) {
  const { productDataKey, filteredDataKey } = DataState();
  const [, setProductData] = productDataKey;
  const [filteredData, setFilteredData] = filteredDataKey;
  useEffect(() => {
    searchDisplay(true);
  }, []);
  const addItemTOCartHandler = (id, product) => {
    onItemAddedTOCart(product);
    const existingDataItemIndex = filteredData.findIndex((c) => c.id === product.id);
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
      const updatedItem = {
        ...existingItem,
        quantity: 0,
      };
      updatedItems = [...filteredData];
      updatedItems[existingDataItemIndex] = updatedItem;
    }
    setFilteredData(updatedItems);
    setProductData(updatedItems);
  };

  return (
    <HomeContainer>
      <Grid container wrap="wrap" className="grid__wrapper">
        {(loading ? Array.from(new Array(6)) : filteredData).map((item) => (
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
                      {`₹${item.price}`}
                    </Typography>
                  </div>
                </div>
                <div className="card-footer">
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {`Qty:${item.quantity}`}
                  </Typography>
                  <IconButton aria-label="delete" size="small" onClick={() => addItemTOCartHandler(item.id, item)}>
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
  onItemAddedTOCart: PropTypes.func.isRequired,
  searchDisplay: PropTypes.func.isRequired,
};

export default Dashboard;

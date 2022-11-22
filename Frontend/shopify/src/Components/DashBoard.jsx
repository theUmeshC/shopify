import {
  Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { loadData } from '../Store/productSlice';
import { addItemToCart } from '../Store/cartSlice';
import useStyles from '../UI/DashboardStyles';

// interface dataItem {
//   color: string;
//   currency : string;
//   gender : string;
//   id : number;
//   imageURL : string;
//   name: string;
//   price : number;
//   quantity : number;
//   type : string;
// };

function Dashboard({ searchDisplay, loading }) {
  const classes = useStyles();
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
    <div className={classes.dashboardContainer}>
      <Grid container wrap="wrap" className={classes.dashboardGridWrapper}>
        {(loading ? Array.from(new Array(8)) : filteredProductData).map((item) => (
          <Box className={classes.dCard} key={uuidv4()}>
            {item ? (
              <img alt={item.title} src={item.imageURL} className={classes.dashboardCardImg} />
            ) : (
              <Skeleton animation="wave" variant="rectangular" className={classes.dashboardCardImg} />
            )}
            {item ? (
              <Box sx={{ pl: 1 }}>
                <div>
                  <Typography gutterBottom variant="body2" className={classes.dCardTextTitle}>
                    {item.name}
                  </Typography>
                  <div className={classes.dashboardCardDetails}>
                    <Typography
                      display="block"
                      variant="caption"
                      color="text.secondary"
                      className={classes.dCardTextTitle}
                    >
                      {`${item.gender}|${item.type}`}
                    </Typography>
                    <Typography
                      display="block"
                      variant="caption"
                      className={classes.dCardTextTitle}
                    >
                      {`₹${item.price}.00`}
                    </Typography>
                  </div>
                </div>
                <div className={classes.dashboardCardFooter}>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {`Qty:${item.quantity}`}
                  </Typography>
                  <IconButton aria-label="delete" size="small" onClick={() => addItemTOCartHandler(item)}>
                    <AddShoppingCartIcon className={classes.dashboardCardIcon} />
                  </IconButton>
                </div>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="60%" className={classes.skeleton} />
                <Skeleton className={classes.skeleton} />
                <Skeleton className={classes.skeleton} />
                <Skeleton className={classes.skeleton} />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchDisplay: PropTypes.func.isRequired,
};

export default Dashboard;

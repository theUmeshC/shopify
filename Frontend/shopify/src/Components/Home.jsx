import { Grid, IconButton, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
// import SideBar from "./SideBar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

  const HomeContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 70vw;
    margin: auto;
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border-radius: 5px;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
    }
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .card__details{
        display: flex;
        justify-content: space-between;
    }
  `;

const Home = (props) => {
  props.searchDisplay(true);
  // const data = props.data;
  const cloneData = props.cloneData;
  const loading = props.loading;
  const addItemTOCartHandler = (id) => {
    props.onItemAddedTOCart(id);
  }
  
  return (
      <HomeContainer>
        <Grid container wrap="wrap">
          {(loading ? Array.from(new Array(6)) : cloneData).map((item, index) => (
            <Box
              className="card"
              key={index++}
              sx={{ width: 210, marginRight: 6, my: 5 }}
            >
              {item ? (
                <img
                  style={{ width: 210, height: 118 }}
                  alt={item.title}
                  src={item.imageURL}
                />
              ) : (
                <Skeleton animation="wave"  variant="rectangular" width={210} height={118} />
              )}

              {item ? (
                <Box sx={{ pl: 1 }} className='card__details'>
                  <div>
                    <Typography gutterBottom variant="body2">
                      {item.name}
                    </Typography>
                    <Typography
                      display="block"
                      variant="caption"
                      color="text.secondary"
                    >
                      {item.price}
                    </Typography>
                  </div>
                  <div onClick={() => addItemTOCartHandler(item.id)}>
                    <IconButton aria-label="delete" size="small">
                      <ShoppingCartOutlinedIcon className="cart__icon" fontSize="small" />
                    </IconButton>
                  </div>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      </HomeContainer>
  );
};

export default Home;

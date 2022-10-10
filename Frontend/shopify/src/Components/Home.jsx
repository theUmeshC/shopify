import { Grid, IconButton, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: auto;
  align-items: center;
  justify-content: center;
  .card {
    margin:20px auto;
    padding: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .card__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #cfe6fa;
  }
  .grid__wrapper{
    justify-content: center;
    align-items: center;
  }
  .cart__icon{
    background-color: #eb8d12;
    padding:5px;
    border-radius: 50%;
    color: white;
    transition: 0.3s;
    box-sizing: border-box;
    font-size: 30px;
    
  }
  .cart__icon:hover{
    background-color: #db7e05;
    scale: 1.2;
  }
  .cart__icon:active{
    background-color: white;
    color:#eb8d12;
    border:1px solid #eb8d12;
  }

`;

const Home = (props) => {
  useEffect(() => {
    props.searchDisplay(true);
  }, [props]);
  const cloneData = props.cloneData;
  const loading = props.loading;
  const addItemTOCartHandler = (id) => {
    props.onItemAddedTOCart(id);
  };

  return (
    <HomeContainer>
      <Grid container wrap="wrap" className="grid__wrapper" >
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
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={210}
                height={118}
              />
            )}

            {item ? (
              <Box sx={{ pl: 1 }} className="card__details">
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
                    <ShoppingCartOutlinedIcon
                      className="cart__icon"
                      fontSize="small"
                    />
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

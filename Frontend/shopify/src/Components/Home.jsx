import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const Home = (props) => {
  const Container = styled.div`
    display: flex;  
    background-image: linear-gradient(to right, #2cd4d9, #5333ed );
  `;
  const HomeContainer = styled.div`
    width:70vw;
    margin: auto;
  `
  const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
      },
      {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
      },
      {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
      },{
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
      },
      {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
      },
      {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
      } 
   ];
  const  loading = props.loading  ;
  
  
  return (
    <Container>
      <SideBar />      
      <HomeContainer>
      <Grid container wrap="wrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 6, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
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
      
    </Container>
  );
};

export default Home;

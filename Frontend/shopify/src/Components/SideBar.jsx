import {
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const SideBar = (props) => {
  const filterColor = [
    ...new Set(
      props.data.map((item) => {
        return item.color;
      })
    ),
  ];
  const filterType = [
    ...new Set(
      props.data.map((item) => {
        return item.type;
      })
    ),
  ];
  const SideBar = styled.div`
    height: 90vh;
    min-width: 180px;
    position: sticky;
    top: 10vh;
    /* background-color: #5333ed; */
    border-right: 2px solid blue;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    box-sizing: border-box;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <SideBar>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {filterColor.map((item) => {
            return (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="250" control={<Radio />} label="0-250" />
          <FormControlLabel value="300" control={<Radio />} label="250-450" />
          <FormControlLabel value="500" control={<Radio />} label="500-All" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {filterType.map((item) => {
            return (
              <FormControlLabel value={item} control={<Radio />} label={item} />
            );
          })}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </SideBar>
  );
};

export default SideBar;

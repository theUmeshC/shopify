import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
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
  const [filterData, setFilterData] =useState({
    color : '',
    price : '',
    type : '',
    gender : ''
  })
  const onColorChange = (e) => {
    console.log(e.target.value);
    setFilterData(filterData => {
      filterData.color = e.target.value
    })
    console.log(filterData);
  }
  const onPriceChange = (e) => {
    console.log(e.target.value);
    setFilterData(filterData => {
      filterData.price = e.target.value
    })
    console.log(filterData);
  }
  const onTypeChange = (e) => {
    console.log(e.target.value);
    setFilterData(filterData => {
      filterData.type = e.target.value
    })
    console.log(filterData);
  }

  return (
    <SideBar>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={onColorChange}
        >
          {filterColor.map((item, index) => {
            return (
              <FormControlLabel
                key={index++}
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
          onClick={onPriceChange}
        >
          <FormControlLabel key={342131} value={250} control={<Radio />} label="0-250" />
          <FormControlLabel key={342142431} value={300} control={<Radio />} label="250-450" />
          <FormControlLabel key={3421433531} value={500} control={<Radio />} label="500-All" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onClick={onTypeChange}
        >
          {filterType.map((item, index) => {
            return (
              <FormControlLabel key={index+=20} value={item} control={<Radio />} label={item} />
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

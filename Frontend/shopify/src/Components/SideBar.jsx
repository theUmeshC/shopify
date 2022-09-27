import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const SideBar = () => {
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
    ::-webkit-scrollbar{
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
          <FormControlLabel value="female" control={<Radio />} label="Red" />
          <FormControlLabel value="male" control={<Radio />} label="Blue" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="0-123" />
          <FormControlLabel value="male" control={<Radio />} label="123-234" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Polo" control={<Radio />} label="Polo" />
          <FormControlLabel value="Hoodie" control={<Radio />} label="Hoodie" />
          <FormControlLabel value="Basic" control={<Radio />} label="Basic" />
        </RadioGroup>
      </FormControl>
    </SideBar>
  );
};

export default SideBar;

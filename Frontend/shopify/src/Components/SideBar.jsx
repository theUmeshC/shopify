import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const SideBarContainer = styled.div`
  height: 90vh;
  min-width: 160px;
  position: sticky;
  top: 10vh;
  /* background-color: #bed5f1;
  border-right: 2px solid #5233edab; */
  border-radius: 4px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 50px 50px 100px #ebe9e9, -50px -50px 100px #ffffff;
  flex-direction: column;
  padding-left: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const SideBar = (props) => {
  const [checkedRadio, setCheckedRadio] = useState("");
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
  const filterChangeHandler = (e) => {
    console.log(e.target.checked);
    setCheckedRadio(e.target.value);
    e.preventDefault();
    props.filterDataHandler(e.target.value);
  };
  return (
    <SideBarContainer className="hamburger">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {filterColor.map((item, index) => {
            return (
              <FormControlLabel
                key={index++}
                value={item}
                control={
                  <Radio
                    checked={checkedRadio === item}
                    onClick={filterChangeHandler}
                  />
                }
                label={item}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {filterType.map((item, index) => {
            return (
              <FormControlLabel
                key={(index += 20)}
                value={item}
                control={
                  <Radio
                    checked={checkedRadio === item}
                    onClick={filterChangeHandler}
                  />
                }
                label={item}
              />
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
          <FormControlLabel
            value="Men"
            control={
              <Radio
                checked={checkedRadio === "Men"}
                onClick={filterChangeHandler}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="Women"
            control={
              <Radio
                checked={checkedRadio === "Women"}
                onClick={filterChangeHandler}
              />
            }
            label="Female"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="250"
            control={
              <Radio
                checked={checkedRadio === "250"}
                onClick={filterChangeHandler}
              />
            }
            label="0-250"
          />
          <FormControlLabel
            value="300"
            control={
              <Radio
                checked={checkedRadio === "300"}
                onClick={filterChangeHandler}
              />
            }
            label="250-450"
          />
          <FormControlLabel
            value="500"
            control={
              <Radio
                checked={checkedRadio === "500"}
                onClick={filterChangeHandler}
              />
            }
            label="500-All"
          />
        </RadioGroup>
      </FormControl>
    </SideBarContainer>
  );
};

export default SideBar;

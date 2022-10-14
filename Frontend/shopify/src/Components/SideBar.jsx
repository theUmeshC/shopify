import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import {SideBarContainer} from '../UI/SideBarContainer';


const SideBar = (props) => {
  const [checkedColor, setCheckedColor] = useState("");
  const [checkedType, setCheckedType] = useState("");
  const [checkedGender, setCheckedGender] = useState("");
  const [checkedPrice, setCheckedPrice] = useState("");
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
  const filterColorChangeHandler = (e) => {
    setCheckedColor(e.target.value);
    e.preventDefault();
    props.filterDataHandler(e.target.value);
  };
  const filterTypeChangeHandler = (e) => {
    setCheckedType(e.target.value);
    e.preventDefault();
    props.filterDataHandler(e.target.value);
  };
  const filterGenderChangeHandler = (e) => {
    setCheckedGender(e.target.value);
    e.preventDefault();
    props.filterDataHandler(e.target.value);
  };
  const filterPriceChangeHandler = (e) => {
    setCheckedPrice(e.target.value);
    e.preventDefault();
    props.filterDataHandler(e.target.value);
  };
  return (
    <SideBarContainer className="hamburger">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        {filterColor.map((item, index) => {
          return (
            <FormControlLabel
              key={index++}
              value={item}
              control={
                <Checkbox
                  checked={checkedColor === item}
                  onClick={filterColorChangeHandler}
                />
              }
              label={item}
            />
          );
        })}
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        {filterType.map((item, index) => {
          return (
            <FormControlLabel
              key={(index += 20)}
              value={item}
              control={
                <Checkbox
                  checked={checkedType === item}
                  onClick={filterTypeChangeHandler}
                />
              }
              label={item}
            />
          );
        })}
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <FormControlLabel
          value="Men"
          control={
            <Checkbox
              checked={checkedGender === "Men"}
              onClick={filterGenderChangeHandler}
            />
          }
          label="Male"
        />
        <FormControlLabel
          value="Women"
          control={
            <Checkbox
              checked={checkedGender === "Women"}
              onClick={filterGenderChangeHandler}
            />
          }
          label="Female"
        />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <FormControlLabel
          value="250"
          control={
            <Checkbox
              checked={checkedPrice === "250"}
              onClick={filterPriceChangeHandler}
            />
          }
          label="0-250"
        />
        <FormControlLabel
          value="300"
          control={
            <Checkbox
              checked={checkedPrice === "300"}
              onClick={filterPriceChangeHandler}
            />
          }
          label="250-450"
        />
        <FormControlLabel
          value="500"
          control={
            <Checkbox
              checked={checkedPrice === "500"}
              onClick={filterPriceChangeHandler}
            />
          }
          label="500-All"
        />
      </FormControl>
    </SideBarContainer>
  );
};

export default SideBar;

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DataState } from "../Context/Data/dataContext";
import { SideBarContainer } from "../UI/SideBarContainer";

const SideBar = (props) => {
  const [Checked, setChecked] = useState([]);
  const { dispatchData } = DataState();

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
  const handleCheck = (item) => {
    const currentIndex = Checked.indexOf(item);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  useEffect(() => {
    dispatchData({ type: "FILTER-DATA", payload: Checked });
  }, [dispatchData, Checked]);
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
                  checked={Checked.indexOf(item) === -1 ? false : true}
                  onChange={() => {
                    handleCheck(item);
                  }}
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
              key={index}
              value={item}
              control={
                <Checkbox
                  checked={Checked.indexOf(item) === -1 ? false : true}
                  onChange={() => {
                    handleCheck(item);
                  }}
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
              checked={Checked.indexOf("Men") === -1 ? false : true}
              onChange={() => {
                handleCheck("Men");
              }}
            />
          }
          label="Male"
        />
        <FormControlLabel
          value="Women"
          control={
            <Checkbox
              checked={Checked.indexOf("Women") === -1 ? false : true}
              onChange={() => {
                handleCheck("Women");
              }}
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
              checked={Checked.indexOf("250") === -1 ? false : true}
              onChange={() => {
                handleCheck("250");
              }}
            />
          }
          label="0-250"
        />
        <FormControlLabel
          value="300"
          control={
            <Checkbox
              checked={Checked.indexOf("300") === -1 ? false : true}
              onChange={() => {
                handleCheck("300");
              }}
            />
          }
          label="250-450"
        />
        <FormControlLabel
          value="500"
          control={
            <Checkbox
              checked={Checked.indexOf("500") === -1 ? false : true}
              onChange={() => {
                handleCheck("500");
              }}
            />
          }
          label="500-All"
        />
      </FormControl>
    </SideBarContainer>
  );
};

export default SideBar;

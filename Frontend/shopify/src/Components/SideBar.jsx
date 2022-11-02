/* eslint-disable react/forbid-prop-types */
import {
  FormControl, FormControlLabel, FormLabel, Checkbox,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataState } from '../Context/DataContext/dataContext';
import SideBarContainer from '../UI/SideBarContainer';

function SideBar({ data }) {
  const { productDataKey, filteredDataKey } = DataState();
  const [productData, setProductData] = productDataKey;
  const [, setFilteredData] = filteredDataKey;
  const [Checked, setChecked] = useState([]);

  const filterColor = [
    ...new Set(
      data.map((item) => item.color),
    ),
  ];
  const filterType = [
    ...new Set(
      data.map((item) => item.type),
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
    const filteredItems = [];
    if (Checked.length > 0) {
      Checked.forEach((element) => {
        const filterItem = productData.filter((item) => (
          item.color.toLowerCase() === element.toLowerCase()
            || item.type.toLowerCase() === element.toLowerCase()
            || item.price.toString() === element
            || item.gender.toLowerCase() === element.toLowerCase()
        ));
        filteredItems.push(...filterItem);
      });
      setFilteredData(filteredItems);
    } else {
      setFilteredData(productData);
    }
  }, [setProductData, setFilteredData, productData, Checked]);
  return (
    <SideBarContainer className="hamburger">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        {filterColor.map((item) => (
          <FormControlLabel
            key={Math.random()}
            value={item}
            control={(
              <Checkbox
                checked={Checked.indexOf(item) !== -1}
                onChange={() => {
                  handleCheck(item);
                }}
              />
              )}
            label={item}
          />
        ))}
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        {filterType.map((item) => (
          <FormControlLabel
            key={Math.random()}
            value={item}
            control={(
              <Checkbox
                checked={Checked.indexOf(item) !== -1}
                onChange={() => {
                  handleCheck(item);
                }}
              />
              )}
            label={item}
          />
        ))}
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <FormControlLabel
          value="Men"
          control={(
            <Checkbox
              checked={Checked.indexOf('Men') !== -1}
              onChange={() => {
                handleCheck('Men');
              }}
            />
          )}
          label="Male"
        />
        <FormControlLabel
          value="Women"
          control={(
            <Checkbox
              checked={Checked.indexOf('Women') !== -1}
              onChange={() => {
                handleCheck('Women');
              }}
            />
          )}
          label="Female"
        />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <FormControlLabel
          value="250"
          control={(
            <Checkbox
              checked={Checked.indexOf('250') !== -1}
              onChange={() => {
                handleCheck('250');
              }}
            />
          )}
          label="0-250"
        />
        <FormControlLabel
          value="300"
          control={(
            <Checkbox
              checked={Checked.indexOf('300') !== -1}
              onChange={() => {
                handleCheck('300');
              }}
            />
          )}
          label="250-450"
        />
        <FormControlLabel
          value="500"
          control={(
            <Checkbox
              checked={Checked.indexOf('500') !== -1}
              onChange={() => {
                handleCheck('500');
              }}
            />
          )}
          label="500-All"
        />
      </FormControl>
    </SideBarContainer>
  );
}

SideBar.propTypes = {
  data: PropTypes.array,
};
SideBar.defaultProps = {
  data: PropTypes.array,
};

export default SideBar;

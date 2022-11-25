import {
  FormControl, FormControlLabel, FormLabel, Checkbox,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateFilteredData } from '../Store/productSlice';
import useStyles from '../UI/SidebarStyles';
import { IRootState } from '../Store/store';
import { dataTypeProductContext } from '../Types/types';

interface Iprops {
  data: dataTypeProductContext
};

const SideBar: React.FC<Iprops> = ({ data }) => {
  const productDataRedux = useSelector((state: IRootState) => state.productReducers.productData);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Checked, setChecked] = useState<string[]>([]);
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
  const handleCheck: (item: string) => void = (item: string) => {
    const currentIndex = Checked.indexOf(item);
    const newChecked: string[] = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  useEffect(() => {
    const filteredItems: dataTypeProductContext = [];
    if (Checked.length > 0) {
      Checked.forEach((element: string) => {
        const filterItem = productDataRedux.filter((item) => (
          item.color.toLowerCase() === element.toLowerCase() ||
          item.type.toLowerCase() === element.toLowerCase() ||
          item.price.toString() === element ||
          item.gender.toLowerCase() === element.toLowerCase()
        ));
        filteredItems.push(...filterItem);
      });
      dispatch(updateFilteredData(filteredItems));
    } else {
      dispatch(updateFilteredData(productDataRedux));
    }
  }, [Checked]);
  return (
    <div className={`${classes.sidebar_container} hamburger`}>
      <FormControl>
        <FormLabel
          className={classes.sideBarTitles}
          id="demo-radio-buttons-group-label"
        >
          Color
        </FormLabel>
        {filterColor.map((item) => (
          <FormControlLabel
            key={uuidv4()}
            value={item}
            control={(
              <Checkbox
                className={classes.sidebarCheckbox}
                checked={Checked.includes(item)}
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
        <FormLabel
          className={classes.sideBarTitles}
          id="demo-radio-buttons-group-label"
        >
          Type
        </FormLabel>
        {filterType.map((item) => (
          <FormControlLabel
            key={uuidv4()}
            value={item}
            control={(
              <Checkbox
                className={classes.sidebarCheckbox}
                checked={Checked.includes(item)}
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
        <FormLabel
          className={classes.sideBarTitles}
          id="demo-radio-buttons-group-label"
        >
          Gender
        </FormLabel>
        <FormControlLabel
          value="Men"
          control={(
            <Checkbox
              className={classes.sidebarCheckbox}
              checked={Checked.includes('Men')}
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
              className={classes.sidebarCheckbox}
              checked={Checked.includes('Women')}
              onChange={() => {
                handleCheck('Women');
              }}
            />
          )}
          label="Female"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          className={classes.sideBarTitles}
          id="demo-radio-buttons-group-label"
        >
          Price
        </FormLabel>
        <FormControlLabel
          value="250"
          control={(
            <Checkbox
              className={classes.sidebarCheckbox}
              checked={Checked.includes('250')}
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
              className={classes.sidebarCheckbox}
              checked={Checked.includes('300')}
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
              className={classes.sidebarCheckbox}
              checked={Checked.includes('500')}
              onChange={() => {
                handleCheck('500');
              }}
            />
          )}
          label="500-All"
        />
      </FormControl>
    </div>
  );
}

export default SideBar;

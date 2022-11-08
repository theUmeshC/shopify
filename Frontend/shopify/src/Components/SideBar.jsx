/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import {
  FormControl, FormControlLabel, FormLabel, Checkbox,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import SideBarContainer from '../UI/SideBarContainer';
import { updateFilteredData } from '../Store/productSlice';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: [],
    };
  }

  componentDidUpdate(_, prevState) {
    const { Checked } = this.state;
    const { productData } = this.props;
    if (prevState.Checked !== Checked) {
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
        this.props.updateFilteredData(filteredItems);
      } else {
        this.props.updateFilteredData(productData);
      }
    }
  }

  handleCheck = (item) => {
    const { Checked } = this.state;
    const currentIndex = Checked.indexOf(item);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      Checked: newChecked,
    });
  };

  render() {
    const { data } = this.props;
    const { Checked } = this.state;
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
    return (
      <SideBarContainer className="hamburger">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
          {filterColor.map((item) => (
            <FormControlLabel
              key={uuidv4()}
              value={item}
              control={(
                <Checkbox
                  checked={Checked.indexOf(item) !== -1}
                  onChange={() => {
                    this.handleCheck(item);
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
                    this.handleCheck(item);
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
                  this.handleCheck('Men');
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
                  this.handleCheck('Women');
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
                  this.handleCheck('250');
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
                  this.handleCheck('300');
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
                  this.handleCheck('500');
                }}
              />
            )}
            label="500-All"
          />
        </FormControl>
      </SideBarContainer>
    );
  }
}

SideBar.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  productData: PropTypes.instanceOf(Array).isRequired,
  updateFilteredData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducers } = state;
  const { productReducers } = state;
  const { productData, filteredData } = productReducers;
  return { cartReducers, productData, filteredData };
};

const mapDispatchToProps = { updateFilteredData };

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

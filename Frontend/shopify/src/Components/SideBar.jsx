/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prop-types */
import {
  FormControl, FormControlLabel, FormLabel, Checkbox,
} from '@mui/material';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SideBarContainer from '../UI/SideBarContainer';
import { productDataContext } from '../Context/DataContext/dataContext';

export default class SideBar extends Component {
  static contextType = productDataContext;

  constructor(props) {
    super(props);
    this.state = {
      Checked: [],
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.Checked !== this.state.Checked) {
      const filteredItems = [];
      if (this.state.Checked.length > 0) {
        this.state.Checked.forEach((element) => {
          const filterItem = this.context.dataState.productData.filter((item) => (
            item.color.toLowerCase() === element.toLowerCase()
              || item.type.toLowerCase() === element.toLowerCase()
              || item.price.toString() === element
              || item.gender.toLowerCase() === element.toLowerCase()
          ));
          filteredItems.push(...filterItem);
        });
        this.context.updateFilteredData(filteredItems);
      } else {
        this.context.updateFilteredData(this.context.dataState.productData);
      }
    }
  }

  handleCheck = (item) => {
    const currentIndex = this.state.Checked.indexOf(item);
    const newChecked = [...this.state.Checked];
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
    const filterColor = [
      ...new Set(
        this.props.data.map((item) => item.color),
      ),
    ];
    const filterType = [
      ...new Set(
        this.props.data.map((item) => item.type),
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
                  checked={this.state.Checked.indexOf(item) !== -1}
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
                  checked={this.state.Checked.indexOf(item) !== -1}
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
                checked={this.state.Checked.indexOf('Men') !== -1}
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
                checked={this.state.Checked.indexOf('Women') !== -1}
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
                checked={this.state.Checked.indexOf('250') !== -1}
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
                checked={this.state.Checked.indexOf('300') !== -1}
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
                checked={this.state.Checked.indexOf('500') !== -1}
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

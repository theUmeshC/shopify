/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, FormLabel, Checkbox } from '@mui/material';
import { SideBarContainer } from '../UI/SideBarContainer';

import React, { Component } from 'react';
import { productDataContext } from '../Context/DataContext/dataContext';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: []
    };
  }

  static contextType = productDataContext;

  handleCheck = (item) => {
    const currentIndex = this.state.Checked.indexOf(item);
    const newChecked = [...this.state.Checked];
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      Checked: newChecked
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.Checked !== this.state.Checked) {
      let filteredItems = [];
      if (this.state.Checked.length > 0) {
        this.state.Checked.forEach((element) => {
          const filterItem = this.context.dataState.productData.filter((item) => {
            return (
              item.color.toLowerCase() === element.toLowerCase() ||
              item.type.toLowerCase() === element.toLowerCase() ||
              item.price.toString() === element ||
              item.gender.toLowerCase() === element.toLowerCase()
            );
          });
          filteredItems.push(...filterItem);
        });
        this.context.updateFilteredData(filteredItems);
      } else {
        this.context.updateFilteredData(this.context.dataState.productData);
      }
    }
  }

  render() {
    const filterColor = [
      ...new Set(
        this.props.data.map((item) => {
          return item.color;
        })
      )
    ];
    const filterType = [
      ...new Set(
        this.props.data.map((item) => {
          return item.type;
        })
      )
    ];
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
                    checked={this.state.Checked.indexOf(item) === -1 ? false : true}
                    onChange={() => {
                      this.handleCheck(item);
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
                    checked={this.state.Checked.indexOf(item) === -1 ? false : true}
                    onChange={() => {
                      this.handleCheck(item);
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
                checked={this.state.Checked.indexOf('Men') === -1 ? false : true}
                onChange={() => {
                  this.handleCheck('Men');
                }}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="Women"
            control={
              <Checkbox
                checked={this.state.Checked.indexOf('Women') === -1 ? false : true}
                onChange={() => {
                  this.handleCheck('Women');
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
                checked={this.state.Checked.indexOf('250') === -1 ? false : true}
                onChange={() => {
                  this.handleCheck('250');
                }}
              />
            }
            label="0-250"
          />
          <FormControlLabel
            value="300"
            control={
              <Checkbox
                checked={this.state.Checked.indexOf('300') === -1 ? false : true}
                onChange={() => {
                  this.handleCheck('300');
                }}
              />
            }
            label="250-450"
          />
          <FormControlLabel
            value="500"
            control={
              <Checkbox
                checked={this.state.Checked.indexOf('500') === -1 ? false : true}
                onChange={() => {
                  this.handleCheck('500');
                }}
              />
            }
            label="500-All"
          />
        </FormControl>
      </SideBarContainer>
    );
  }
}

/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        {!this.props.loading && <SideBar data={this.props.data} />}
        <Dashboard
          className=""
          loading={this.props.loading}
        />
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

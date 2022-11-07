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
    const { loading, data } = this.props;
    return (
      <div className="wrapper">
        {!loading && <SideBar data={data} />}
        <Dashboard
          className=""
          loading={loading}
        />
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import Dashboard from './DashBoard';
import SideBar from './SideBar';

function Home({ searchDisplay, loading, data }) {
  return (
    <div className="wrapper">
      {data && <SideBar data={data} />}
      <Dashboard
        className=""
        loading={loading}
        searchDisplay={searchDisplay}
      />
    </div>
  );
}

Home.propTypes = {
  searchDisplay: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array),
};

export default Home;

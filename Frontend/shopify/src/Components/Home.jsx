/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../UI/HomeStyles';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

function Home({ searchDisplay, loading, data }) {
  const classes = useStyles();
  return (
    <div className={classes.HomeWrapper}>
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

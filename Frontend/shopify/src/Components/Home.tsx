import PropTypes from 'prop-types';
import useStyles from '../UI/HomeStyles';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
import { dataType } from '../Types/types';
import React from 'react';
import Loading from './Loading';

interface Iprops {
  searchDisplay: (val: boolean) => void
  loading: boolean
  data: dataType
};

const Home: React.FC<Iprops> = ({ searchDisplay, loading, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.HomeWrapper}>
      {(data !== undefined) ? <SideBar data={data}/> : <Loading />}
      <Dashboard
        loading={loading}
        searchDisplay={searchDisplay}
      />
    </div>
  );
}

Home.propTypes = {
  searchDisplay: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;

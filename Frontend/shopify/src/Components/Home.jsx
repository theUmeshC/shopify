/* eslint-disable */
import PropTypes from 'prop-types';
import useStyles from '../UI/HomeStyles';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
// import { dataInterface } from '../Helper/useAxios';

function Home({ searchDisplay, loading, data }) {
  const classes = useStyles();
  return (
    <div className={classes.HomeWrapper}>
      {data && <SideBar data={data} />}
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
  // data: PropTypes.instanceOf(Array),
};

export default Home;

/* eslint-disable */
import PropTypes from 'prop-types';
import useStyles from '../UI/HomeStyles';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
import { dataType } from '../Helper/types';

type Iprops = {
  searchDisplay : ( val: boolean ) => void,
  loading : boolean,
  data: dataType,
};

function Home({ searchDisplay, loading, data }:Iprops){
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
  data: PropTypes.instanceOf(Array),
};

export default Home;

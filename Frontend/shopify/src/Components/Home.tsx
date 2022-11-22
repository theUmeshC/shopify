/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import useStyles from '../UI/HomeStyles';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

type Iprops = {
  searchDisplay : ( val: boolean ) => void,
  loading : boolean,
  data: {
      color: string,
      currency : string,
      gender : string,
      id : number,
      imageURL : string,
      name: string,
      price : number,
      quantity : number,
      type : string,
    }[]|undefined,
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

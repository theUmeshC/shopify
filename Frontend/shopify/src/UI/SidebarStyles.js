import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  sidebar_container: {
    height: '90vh',
    width: '16%',
    position: 'sticky',
    top: '10vh',
    background: '#A3C7D6',
    flexDirection: 'column',
    padding: '5px 0 0 3%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  sideBarTitles: {
    fontSize: '17px',
    color: 'black !important',
    fontWeight: '700 !important',
    margin: '15px 0 5px 0 !important',
  },
  sidebarCheckbox: {
    // color: '#8D72E1 !important',
  },
}));

import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  sidebar_container: {
    height: '90vh',
    width: '16%',
    position: 'sticky',
    top: '10vh',
    background: '#A3C7D6',
    flexDirection: 'column',
    paddingLeft: '25px',
    paddingTop: '5px',
    boxSizing: 'border-box',
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
    color: 'green !important',
  },
}));

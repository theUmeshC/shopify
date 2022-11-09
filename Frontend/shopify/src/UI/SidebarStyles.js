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
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  sideBarTitles: {
    fontSize: '17px',
    color: '#6C4AB6',
    fontWeight: '700',
    margin: '15px 0 5px 0',
  },
  sidebarCheckbox: {
    color: '#8D72E1',
  },
}));

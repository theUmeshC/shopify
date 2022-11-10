import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  navContainer: {
    position: 'sticky',
    top: 0,
    width: '100vw',
    height: '10vh',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    padding: '1px 15px',
    alignItems: 'center',
    backgroundColor: '#372948',
    color: 'white',
    zIndex: 999,
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
  },
  navCart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    '& a ': {
      color: 'white',
    },
    '& a:hover': {
      cursor: 'pointer',
      color: 'gold',
    },
    '& span': {
      width: '5px',
    },
  },
  navbarRightContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    '& h1': {
      color: 'white',
      fontSize: '15px',
    },
    '& h1:hover': {
      cursor: 'pointer',
      color: 'gold',
    },
  },
  navbarLogo: {
    fontSize: '20px',
    color: 'white',
    fontFamily: 'Sofia,serif',
  },
  navbarSearchInput: {
    display: 'flex',
    minWidth: '80px',
    alignItems: 'center',
    '& input': {
      width: '350px',
      backgroundColor: 'transparent',
      height: '20px',
      border: 'solid white',
      borderBottomWidth: '1px',
      borderTopWidth: '0px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
    },
    '& input:focus': {
      color: 'white',
    },
  },
}));

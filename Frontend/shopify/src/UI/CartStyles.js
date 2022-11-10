import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  cart_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90vw',
    borderRadius: '2px',
    background: '#f8f6f6',
    border: '1px solid #cfcfcf',
    boxShadow: 'rgba(0,0,0,0.15)1.95px 1.95px 2.6px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    height: '65%',
  },
  cart_items_container: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '16px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'white',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#597ef7',
      borderRadius: '7px',
      border: '3px solid #ffffff',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#3766ff',
    },
  },
  cart_titles: {
    borderRadius: '2px',
    position: 'sticky',
    padding: '10px 0px',
    top: 0,
    zIndex: 1,
    backgroundColor: '#c2e2fe',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& h1': {
      fontSize: '15px',
      fontWeight: 'bold',
    },
  },
  cart_items: {
    height: '90px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& img': {
      width: '70px',
      objectFit: 'contain',
      borderRadius: '50%',
    },
  },
  cart_items_details: {
    width: '95px',
  },
  cart_items_quantity: {
    width: '60px',
  },
  cart_items_cart__icon: {
    backgroundColor: '#ff5709',
    padding: '5px',
    borderRadius: '50%',
    color: 'white',
    boxSizing: 'border-box',
    fontSize: '30px !important',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: '#ff0000',
      scale: 1.2,
      transition: '0.3s ease !important',
    },
    '&:active': {
      backgroundColor: 'white',
      color: '#ebae12',
      border: '1px solid #ebae12',
    },
  },
  cart_basket: {
    position: 'fixed',
    bottom: '0vh',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    height: '2.2rem',
    width: '90vw',
    zIndex: 999,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#c2e2fe',
    border: '1px solid #cfcfcf',
    padding: '0.3em 0',
    '& h1': {
      fontSize: '1.07rem',
    },
  },
}));

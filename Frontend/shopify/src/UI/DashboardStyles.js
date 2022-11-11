import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  dashboardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '84%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dCard: {
    margin: '30px',
    width: '200px',
    height: '254px',
    padding: '0.8em',
    background: '#f5f5f5',
    position: 'relative',
    overflow: 'visible',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)',
  },
  dashboardCardImg: {
    backgroundColor: '#8D72E1 !important',
    height: '55% !important',
    width: '100% !important',
    borderRadius: '0.5rem !important',
    transition: '0.3s ease !important',
  },
  dCardTextTitle: {
    fontWeight: 500,
    fontSize: '1.1em',
    lineHeight: 1.5,
  },
  dashboardCardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8em',
    marginBottom: '0.5em',
  },
  dashboardCardFooter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',
    borderTop: '1px solid #ddd',
  },
  dashboardGridWrapper: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardCardIcon: {
    backgroundColor: '#8D72E1',
    padding: '5px',
    borderRadius: '50%',
    color: 'white',
    transition: '0.3s',
    boxSizing: 'border-box',
    fontSize: '30px !important',
    '&:hover': {
      backgroundColor: '#6C4AB6',
      scale: 1.2,
      transition: '0.3s ease !important',
    },
    '&:active': {
      backgroundColor: 'white',
      color: '#6C4AB6',
      border: '1px solid #6C4AB6',
    },
  },
  skeleton: {
    backgroundColor: '#8d72e1c9 !important',
  },
}));

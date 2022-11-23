import React from 'react';
import useStyles from '../UI/Loading';

const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingSidebar}>Loading...</div>
  )
}

export default Loading;

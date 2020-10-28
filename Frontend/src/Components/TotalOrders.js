import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalOrders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Your Total Orders
      </Typography>
      <Typography component="p" variant="h4">
        2349
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 21 September, 2020
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}
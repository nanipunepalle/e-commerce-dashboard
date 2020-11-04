import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';




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
          Your Bank Details
      </Typography>
      <Typography component="p" variant="h4">
        PUNEPALLE R LALITH SAGAR
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Acc No: 630010456
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        IFSC Code: IND50006
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Indian Bank
      </Typography>
      <Button>Edit Details</Button>
      <div>
      </div>
    </React.Fragment>
  );
}
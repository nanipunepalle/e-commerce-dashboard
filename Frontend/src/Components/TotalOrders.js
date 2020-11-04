import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {AllOrders} from './AllOrdersArray';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalOrders() {
  const classes = useStyles();
  const date = new Date();
  const [revenue,setRevenue] = React.useState(0);
  // const [price,setPrice] = React.useState(0);
  var price = 0;
  React.useEffect(()=>{
    AllOrders.forEach((val,index)=>{
      // console.log(val)
      price = price + val.price;
      // setRevenue(price);
      if(index === AllOrders.length - 1){
        setRevenue(price);
      }
    })
  },[AllOrders])
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Your Total Orders
      </Typography>
      <Typography component="p" variant="h4">
        {AllOrders.length}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        till {date.toLocaleDateString()}
      </Typography>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Your Total Revenue
      </Typography>
      <Typography component="p" variant="h4">
        {revenue}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        till {date.toLocaleDateString()}
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}
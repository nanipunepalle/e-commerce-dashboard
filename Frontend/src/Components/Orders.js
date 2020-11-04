import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { AllOrders } from './AllOrdersArray';

// function createData(id, date, productName, name, shipTo, paymentMethod, amount) {
//   return { id, date, productName, name, shipTo, paymentMethod, amount };
// }

// const rows = [];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    // AllOrders.reverse();
    
   
  const newArray = AllOrders.sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
  }).reverse()
    setOrders(newArray)
  }, [])

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.slice(0, 7).map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
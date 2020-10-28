import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

function createData(id, date,productName, name, shipTo, paymentMethod, amount) {
  return { id, date,productName, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '21 Sep,2020','Levis Shirt', 'Varun', 'Hyderabad,TS'),
  createData(1, '21 Sep,2020','Trousers', 'Suhaas', 'Kurnool,AP'),
  createData(2, '21 Sep,2020','Levis Shirt', 'Lalith', 'Chittoor,AP'),
  createData(3, '21 Sep,2020','Shorts', 'Pranay', 'Vellore,TN'),
  createData(4, '21 Sep,2020','Levis Shirt', 'Rithvik', 'Hyderabad,TS'),
];

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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
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
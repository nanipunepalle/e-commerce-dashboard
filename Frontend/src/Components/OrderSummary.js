import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { get_cart_products } from './CartProducts';

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: 'Rs 999' },
//   { name: 'Product 2', desc: 'Another thing', price: 'Rs 1999' },
//   { name: 'Product 3', desc: 'Something else', price: 'Rs 1499' },
//   { name: 'Product 4', desc: 'Best thing of all', price: 'Rs 799' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
const addresses = ['Kattamanchi', 'Chittoor', 'Andhra Pradesh', '517001', 'India'];
const payments = [
  { name: 'Card type', detail: 'Master' },
  { name: 'Card holder', detail: 'Lalith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2023' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    get_cart_products.forEach((p) => {
      // totalPrice = totalPrice + parseInt(p.price)
      setTotalPrice(totalPrice => totalPrice + parseInt(p.price))
    })
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {get_cart_products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            Rs {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>Lalith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
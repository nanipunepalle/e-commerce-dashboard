import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import {get_cart_products,delete_cartproducts} from '../Components/CartProducts';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import CheckOutDialog from '../Components/CheckOutDialog';

// const products = [
//     { name: 'Product 1', desc: 'A nice thing', price: 'Rs 999' },
//     { name: 'Product 2', desc: 'Another thing', price: 'Rs 1999' },
//     { name: 'Product 3', desc: 'Something else', price: 'Rs 1499' },
//     { name: 'Product 4', desc: 'Best thing of all', price: 'Rs 799' },
//     { name: 'Shipping', desc: '', price: 'Free' },
// ];
// console.log(get_cart_products)

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
    dialog: {
        // height: '800px',
        minHeight: '90vh',
        maxHeight: '90vh',
    },
}));

export default function Review(props) {
    const classes = useStyles();
    const [open,setOpen] = React.useState(false);
    var total = 0;
    const [products,setProducts] = React.useState(get_cart_products)
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleDelete = (prod) => () => {
        delete_cartproducts(prod)
        setProducts(products.filter((pr)=>{return pr !== prod}))
    }

    // const handleCheckOutClose = ()=>{
    //     setOpen(false);
    // }

    const handleCheckOut = () =>{
        setOpen(true);
    }

    return (
        <Dialog
            open={props.open}
            maxWidth="xs"
            fullWidth
            onClose={handleClose}
            classes={{ paper: classes.dialog }}
            PaperProps={{
                style: {
                    backgroundColor: "#1C1C1E",
                    boxShadow: 'none',
                },
            }}>
            <DialogContent>
                <React.Fragment >
                    <Typography variant="h6" gutterBottom>
                        Cart
                    </Typography>
                    <List disablePadding>
                        {products.map((product) =>{ 
                            total = total + parseInt(product.price);
                            return (
                            
                            <ListItem className={classes.listItem} key={product.name}>
                            <IconButton onClick={handleDelete(product)}><RemoveCircleIcon></RemoveCircleIcon></IconButton>
                                <ListItemText primary={product.name} secondary={product.desc} />
                                <Typography variant="body2">{product.price}</Typography>
                            </ListItem>
                        )})}
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" className={classes.total}>
                                {total}
                            </Typography>
                        </ListItem>
                    </List>
                    <Button onClick={handleCheckOut}>CheckOut</Button>
                </React.Fragment>
            </DialogContent>
            <CheckOutDialog open={open}  setOpen={setOpen}></CheckOutDialog>
        </Dialog>
    );
}
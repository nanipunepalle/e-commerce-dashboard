import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    dialog: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
}));

export default function Signup(props) {
    const classes = useStyles();
    const token = localStorage.getItem('token');
    

    const handlesignup = (e) => {
        e.preventDefault();
        const {name,category,price,quantity} = e.target.elements;
        // console.log(fullName.value+email.value+phno.value+password.value+type.value)
        var data = new FormData()
        const payload = {
          name: name.value,
          category: category.value,
          price: price.value,
          quantity_available: quantity.value,
        };
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+ '/api/add_product', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST',
          body: data
        }).then((result)=>{
            if(result.status === 200){
                result.json().then(value=>{
                    console.log(value);
                })
            }
        })
    
    }

    return (
        <div>
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5">
                   Add Product
                        </Typography>
                <form className={classes.form} onSubmit={handlesignup}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantity"
                                label="Quantity"
                                name="quantity"
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="price"
                                label="Price"
                                id="price"
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                                <Select
                                    fullWidth
                                    native
                                    label="Category"
                                    inputProps={{
                                        name: 'category',
                                        id: 'outlin',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="Men's clothing">Men's clothing</option>
                                    <option value="Men's Footwear">Men's Footwear</option>
                                    <option value="Men's Accessories">Men's Accessories</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Kid's Wear">Kid's Wear</option>
                                    <option value="Women's Clothing">Women's Clothing</option>
                                    <option value="Women's Footwear">Women's Footwear</option>
                                    <option value="Women's Accessories">Women's Accessories</option>
                                    <option value="Others">Others</option>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
}
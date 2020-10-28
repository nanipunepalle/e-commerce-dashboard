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
                   Bank Account Details
                        </Typography>
            </div>
        </div>
    );
}
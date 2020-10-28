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
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handlesignup = (e) => {
        e.preventDefault();
        const {fullName,email,phno,password,type} = e.target.elements;
        // console.log(fullName.value+email.value+phno.value+password.value+type.value)
        var data = new FormData()
        const payload = {
          name: fullName.value,
          email: email.value,
          password: password.value,
          phno: phno.value,
          user_type: type.value
        };
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+ '/api/signup', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST',
          body: data
        }).then((result)=>{
            if(result.status === 200){
                result.json().then(value=>{
                    console.log(value);
                    localStorage.setItem('token',value.token);
                    props.loggedin(true);
                    props.setOpen(false);
                })
            }
        })
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                classes={{ paper: classes.dialog }}
                PaperProps={{
                    style: {
                        backgroundColor: "#1C1C1E",
                        boxShadow: 'none',
                    },
                }}>
                <DialogContent>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} onSubmit={handlesignup}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="fullName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Full Name"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="phno"
                                        label="Phone Number"
                                        name="phno"
                                        autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroup value={value} name="type" onChange={handleChange}>
                                        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                                        <FormControlLabel value="seller" control={<Radio />} label="Seller" />
                                    </RadioGroup>
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
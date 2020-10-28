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

export default function Signin(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSignin = (e) =>{
    e.preventDefault();
        const {email,password} = e.target.elements;
        // console.log(fullName.value+email.value+phno.value+password.value+type.value)
        var data = new FormData()
        const payload = {
          email: email.value,
          password: password.value, 
        };
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+ '/api/signin', {
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSignin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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










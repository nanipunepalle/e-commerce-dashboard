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
    const item = props.item;
    const [name,setName] = React.useState('');
    const [quantity,setQuantity] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');

    React.useEffect(()=>{
        setName(item.name);
        setQuantity(item.quantity);
        setCategory(item.category);
        setPrice(item.price);
    },[])

    const handleClose = () => {
        props.setOpen(false);
    };
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
                        <Typography component="h1" variant="h5">
                            Edit
                        </Typography>
                        <form className={classes.form} >
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
                                        // value={item.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="quantity"
                                        label="Quantity"
                                        name="Account No"
                                        autoComplete="off"
                                        // value={item.quantity}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="price"
                                        label="IFSC Code"
                                        id="price"
                                        autoComplete="off"
                                        // value={item.price}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="price"
                                        label="Bank Name"
                                        id="price"
                                        autoComplete="off"
                                        // value={item.price}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Edit
                    </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
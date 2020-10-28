import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShirtImage from '../Components/Images/images.jpeg';

import EditDialog from '../Components/EditProductDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1)
    },
}));

export default function AdminItemCard(props) {
    const classes = useStyles();
    const item = props.item;
    const [open,setOpen] = React.useState(false);

    const handleEditButton = ()=>{
        setOpen(true);
    }


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Picture"
                    height="240"
                    image={item.image || ShirtImage}
                    title="Item picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body1">
                        {"Rs "+item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    More Info
                </Button>
                <Button onClick={handleEditButton} size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
            <EditDialog item={item} open={open} setOpen={setOpen}></EditDialog>
        </Card>
    );
}
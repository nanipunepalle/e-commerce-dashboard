import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {add_cartproducts} from '../Components/CartProducts';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1)
    },
}));

export default function ItemCard(props) {
    const classes = useStyles();
    const item = props.item

    const handleAddToCart = () =>{
        add_cartproducts(item);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Picture"
                    height="240"
                    image={item.image}
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
                {/* <Button size="small" color="primary">
                    More Info
                </Button> */}
                <Button onClick={handleAddToCart} size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}
import React from 'react';

import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SettingsIcon from '@material-ui/icons/Settings';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StorageIcon from '@material-ui/icons/Storage';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ItemCard from '../Components/AdminItemCard';
import ShirtImage from '../Components/Images/images.jpeg';
import Trousers from '../Components/Images/shopping-4.png';
import Shoes from '../Components/Images/shopping-7.png';
import Shorts from '../Components/Images/shopping-8.png';
import AdminDashboard from '../Components/AdminDashboard';
import AddProductsPanel from '../Components/AddProductsPanel';
import BankCard from '../Components/BankDetails';

const drawerWidth = 240;


// const products = [{ name: "Levi's Shirt", image: ShirtImage, price: "1499",category: "Men's Clothing"},
// { name: "Marks Trouser", image: Trousers, price: "1299",category: "Men's Clothing" },
// { name: "Woodland Shoes", image: Shoes, price: "2999",category: "Men's Footwear" },
// { name: "Short", image: Shorts, price: "599",category: "Men's Clothing" }]

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.secondary
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: theme.palette.secondary.main
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: theme.palette.secondary.main
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '60%',
    marginLeft: theme.spacing(7),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function AdminHome() {
  const token = localStorage.getItem('token');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [adminDashboardSelected,setAdminDashboardSelected] = React.useState(true);
  const [yourProductsSelected,setYourProductsSelcted] = React.useState(false);
  const [addProductsSelected,setAddProductsSelected] = React.useState(false);
  const [settingsSelected,setSettingsSelected] = React.useState(false);
  const [products,setProducts] = React.useState([{ name: "Levi's Shirt", image: ShirtImage, price: "1499",category: "Men's Clothing"},
  { name: "Marks Trouser", image: Trousers, price: "1299",category: "Men's Clothing" },
  { name: "Woodland Shoes", image: Shoes, price: "2999",category: "Men's Footwear" },
  { name: "Short", image: Shorts, price: "599",category: "Men's Clothing" }])

  React.useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/api/get_product', {
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      method: 'GET'
  }).then(result=>{
    if(result.status === 200){
      result.json().then(value=>{
        console.log(value);
        value.forEach(v => {
          setProducts(products=>[...products,v])
        });
        
      })
    }
  })
  },[])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAdminDashboardClicked= ()=>{
    setAdminDashboardSelected(true);
    setYourProductsSelcted(false);
    setAddProductsSelected(false);
    setSettingsSelected(false);
  }

  const handleProductsClicked= ()=>{
    setYourProductsSelcted(true);
    setAdminDashboardSelected(false);
    setAddProductsSelected(false);
    setSettingsSelected(false);
  }

  const handleAddProductClick = () => {
    setYourProductsSelcted(false);
    setAdminDashboardSelected(false);
    setAddProductsSelected(true);
    setSettingsSelected(false);
  }

  const handleSettingsClicked = () => {
    setYourProductsSelcted(false);
    setAdminDashboardSelected(false);
    setAddProductsSelected(false);
    setSettingsSelected(true);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="secondary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin DashBoard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <IconButton
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleAdminDashboardClicked} selected={adminDashboardSelected}>
            <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
            <ListItemText primary='Overview' />
          </ListItem>
          <ListItem button onClick={handleProductsClicked} selected={yourProductsSelected}>
            <ListItemIcon><StorageIcon></StorageIcon></ListItemIcon>
            <ListItemText primary='Your Products' />
          </ListItem>
          <ListItem button onClick={handleAddProductClick} selected={addProductsSelected}>
            <ListItemIcon><AddShoppingCartIcon></AddShoppingCartIcon></ListItemIcon>
            <ListItemText primary='Add Products' />
          </ListItem>
          <ListItem button onClick={handleSettingsClicked} selected={settingsSelected}>
            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          {/* ))} */}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {adminDashboardSelected && <AdminDashboard></AdminDashboard>}
        {yourProductsSelected && <Grid container component="main" alignItems="center">
        {
            products.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                  <ItemCard item = {item}></ItemCard>
                </Grid>
              )
            })
          }
        </Grid>}
        {
          addProductsSelected && <AddProductsPanel></AddProductsPanel>
        }
        {
          settingsSelected && <BankCard></BankCard>
        }
      </main>
      
    </div>
  );
}
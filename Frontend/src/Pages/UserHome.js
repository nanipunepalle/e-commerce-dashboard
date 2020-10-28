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
import ItemCard from '../Components/ItemCard';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import WcIcon from '@material-ui/icons/Wc';
import AirlineSeatLegroomNormalIcon from '@material-ui/icons/AirlineSeatLegroomNormal';
import DevicesIcon from '@material-ui/icons/Devices';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import More2Icon from '@material-ui/icons/More';

import ShirtImage from '../Components/Images/images.jpeg';
import iPhone from '../Components/Images/shopping.png';
import Watch from '../Components/Images/shopping-3.png';
import Laptop from '../Components/Images/shopping-2.png';
import Trousers from '../Components/Images/shopping-4.png';
import Shoes from '../Components/Images/shopping-7.png';
import Shorts from '../Components/Images/shopping-8.png';

import Signin from './Signin';
import Signup from './Signup';
import CartDialog from '../Components/CartDialog';


const drawerWidth = 240;



const products = [{ name: "Levi's Shirt", image: ShirtImage, price: "1499",category: "Men's Clothing"},
{ name: "iPhone SE", image: iPhone, price: "36999",category: "Electronics" },
{ name: "Fossil Watch", image: Watch, price: "9999",category: "Men's Accessories" },
{ name: "HP Notebook PC", image: Laptop, price: "59999",category: "Electronics" },
{ name: "Marks Trouser", image: Trousers, price: "1299",category: "Men's Clothing" },
{ name: "Woodland Shoes", image: Shoes, price: "2999",category: "Men's Footwear" },
{ name: "Short", image: Shorts, price: "599",category: "Men's Clothing" }]

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // alignItems: 'center'
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
    // necessary for content to be below app bar
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function UserHome({history}) {
  const token = localStorage.getItem('token');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [signinOpen,setSigninOpen] = React.useState(false);
  const [signupOpen,setSignupOpen] = React.useState(false);
  const [cartDialogOpen,setCartDialogOpen] = React.useState(false);
  const [loggedin,setLoggedin] = React.useState(false);
  // const [userType,setUserType] = React.useState('customer');
  const [user,setUser] = React.useState({});
  const [cart,setCart] = React.useState([]);

  React.useEffect(()=>{
    if(token){
      setLoggedin(true);
    }
    fetch(process.env.REACT_APP_API_URL+'/api/me', {
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
        setUser(value);
        if(value.user_type === "admin"){
          history.push('/admin')
        }
      })
    }
  })
  },[token])
  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = ()=>{
    fetch(process.env.REACT_APP_API_URL+'/api/logout', {
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
        setLoggedin(false);
        localStorage.removeItem('token');
        setUser({});
      })
    }
  })
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} onClick={handleLogout}>Logout</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSignin = () =>{
    setSigninOpen(true)
  }

  const handleSignup = () =>{
    setSignupOpen(true)
  }

  const handleCartClick = () => {
    setCartDialogOpen(true);
  }

  const handleCheckOutButton = () => {
    history.push('/checkout')
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
            DashBoard
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
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton onClick={handleCartClick} aria-label="show 4 new mails" color="inherit">
              <ShoppingCartIcon></ShoppingCartIcon>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton>{user.name}</IconButton>
            {loggedin && <IconButton
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>}
          </div>
          {loggedin && <div className={classes.sectionMobile}>
            <IconButton
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>}
          {!loggedin && <Button onClick={handleSignin}>Signin</Button>}
         {!loggedin && <Button onClick={handleSignup}>Signup</Button>}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
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
          <ListItem button selected>
            <ListItemIcon><DashboardIcon></DashboardIcon></ListItemIcon>
            <ListItemText primary='All Products' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><WcIcon></WcIcon></ListItemIcon>
            <ListItemText primary="Men's clothing" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AirlineSeatLegroomNormalIcon></AirlineSeatLegroomNormalIcon></ListItemIcon>
            <ListItemText primary="Men's Footwear" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
            <ListItemText primary="Men's Accessories " />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DevicesIcon></DevicesIcon></ListItemIcon>
            <ListItemText primary='Electronics' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ChildCareIcon></ChildCareIcon></ListItemIcon>
            <ListItemText primary='Kids Wear' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><WcIcon></WcIcon></ListItemIcon>
            <ListItemText primary="Women's Clothing" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AirlineSeatLegroomNormalIcon></AirlineSeatLegroomNormalIcon></ListItemIcon>
            <ListItemText primary="Women's Footwear" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
            <ListItemText primary="Women's Accessories " />
          </ListItem>
          <ListItem button>
            <ListItemIcon><More2Icon></More2Icon></ListItemIcon>
            <ListItemText primary="Others" />
          </ListItem>
          {/* ))} */}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <AdminDashboard></AdminDashboard> */}
        <Grid container component="main" alignItems="center">
          {
            products.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} >
                  <ItemCard item = {item}></ItemCard>
                </Grid>
              )
            })
          }

        </Grid>
      </main>
      <Signin open={signinOpen} setOpen={setSigninOpen} loggedin={setLoggedin}></Signin>
      <Signup open={signupOpen} setOpen={setSignupOpen} loggedin={setLoggedin}></Signup>
      <CartDialog handleCheckOut={handleCheckOutButton} open={cartDialogOpen} setOpen={setCartDialogOpen}></CartDialog>
    </div>
  );
}
























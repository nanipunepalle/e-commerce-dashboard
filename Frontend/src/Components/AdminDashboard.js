import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import TotalOrders from './TotalOrders';
import Orders from './Orders';
import ProductChart from './ProductChart';
import MonthlyRevenuehart from './MonthlyevenueChart';
import ProductRevenueChart from './ProductRevenueChart';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 380,
  },
}));

export default function AdminsDashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalOrders />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
                <ProductChart></ProductChart>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
                <MonthlyRevenuehart></MonthlyRevenuehart>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
                <ProductRevenueChart></ProductRevenueChart>
              </Paper>
            </Grid>
          </Grid>
         
        </Container>

    </div>
  );
}
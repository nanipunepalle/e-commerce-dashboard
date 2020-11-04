import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { AllOrders } from '../Components/AllOrdersArray';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';


function createData(time, products) {
  return { time, products };
}

// const data = [
//   createData('10/09/2020', 30),
//   createData('11/09/2020', 54),
//   createData('10/12/2020', 90),
//   createData('09/13/2020', 120),
//   createData('09/14/2020', 49),
//   createData('09/15/2020', 180),
//   createData('11/07/2020', 210),
// ];

export default function Chart() {
  const theme = useTheme();
  const [selectedMonth, setSelectedMonth] = React.useState(0);
  const [fileteredData, setFilteredData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [monthlyOrdersCount,setMonthlyOrdersCount] = React.useState(0);



  React.useEffect(() => {
    AllOrders.sort((a, b) => {
      return new Date(a.time) - new Date(b.time);
    })
    setData([]);
    setFilteredData([]);
    AllOrders.forEach((d, index, array) => {
      const da = new Date(d.time);
      if (da.getMonth() == selectedMonth) {
        fileteredData.push(d);
      }
      if (index === array.length - 1) {
        // setMonthlyOrdersCount(fileteredData.length)
        var res = fileteredData.reduce(function (obj, v) {
            // console.log(obj)
          obj[v.time] = (obj[v.time] || 0) + v.price;
          
          return obj;
        }, {})
        const aray = [];
        // console.log(res);
        var count = 0;
        const keys = Object.keys(res);
        keys.forEach((k, i, a) => {
          count = count + res[k];
          aray.push(createData(k, res[k]))
          if (i == a.length - 1) {
            setMonthlyOrdersCount(count)
            setData(data => data.concat(aray))
          }
        })
      }
    })
  }, [AllOrders, selectedMonth])



  const handleMonthChange = (event) => {
    console.log(event.target.value);
    setData([]);
    setSelectedMonth(event.target.value);
  }

  return (
    <React.Fragment>
    {/* <Grid>
      <Grid>
        
      </Grid>
    </Grid> */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       2020 Monthly Revenue({monthlyOrdersCount})
      </Typography>
      <div>
      <FormControl >
        <InputLabel htmlFor="month">Month</InputLabel>
        <Select
          onChange={handleMonthChange}
          native
          style={{ width: "200px" }}
          label="Selet Month"
          inputProps={{
            name: 'month',
            id: 'month',
          }}
        >
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </Select>
      </FormControl>
      </div>
      
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Revenue
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="products" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Total Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.products}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
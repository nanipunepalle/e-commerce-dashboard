import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';


function createData(time, products) {
  return { time, products };
}

const data = [
  createData('10th Sep', 30),
  createData('11th Sep', 54),
  createData('12th Sep', 90),
  createData('13th Sep', 120),
  createData('14th Sep', 49),
  createData('15th Sep', 180),
  createData('16th Sep', 210),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
       <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Your Total Orders
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
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
              Orders
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="products" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
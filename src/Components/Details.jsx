import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const data = [
  { time: "10 am", onTime: 50, late: 70 },
  { time: "12 am", onTime: 60, late: 50 },
  { time: "13 am", onTime: 55, late: 65 },
  { time: "14 am", onTime: 70, late: 55 },
  { time: "9 am", onTime: 80, late: 40 },
  { time: "13 am", onTime: 60, late: 50 },
  { time: "15 am", onTime: 75, late: 45 },
  { time: "16 am", onTime: 90, late: 60 },
  { time: "17 am", onTime: 100, late: 70 },
];

const Details = () => {
  return (
    <Box p={3} bgcolor="#f8e8e8" minHeight="100vh">
      <Grid container spacing={3}>
        {/* Info Cards */}
        {[
          { title: "Visitors", count: 4875, change: "+30.77%" },
          { title: "Doctors", count: 4875, change: "+30.77%" },
          { title: "Patients", count: 4875, change: "+30.77%" },
          { title: "Total Beds", count: 4875, availability: "Available" },
        ].map((item, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ backgroundColor: index === 1 ? "#d6c3f7" : "white" }}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h4">{item.count}</Typography>
                <Typography color="error">{item.change || item.availability}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Chart */}
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" mb={2}>Patient Overview</Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="onTime" stroke="#007bff" />
                  <Line type="monotone" dataKey="late" stroke="#e07b7b" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Calendar */}
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#f3c2c2" }}>
            <CardContent>
              <Typography variant="h6" mb={2}>Calendar</Typography>
              <Calendar />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;

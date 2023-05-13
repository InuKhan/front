import React from 'react';
import PieChart from "react-js-pie-chart";
import {Box} from '@mui/material';

const data= [
    { value: 12, name: "Data Point" },
    { value: 24, name: "Another Data Point" },
    { value: 67, name: "Data Point 3" },
    { value: 18, name: "Yet Another Point" },
    { value: 37, name: "A Fifth Data Point" },
  ];

function Chart() {
  return (
    <Box>
    <PieChart sx={{alignItems:"left", width:"10px", height:"10px"}}
      data={data}
      width={20}
      height={20}
      thickness={80}
      colors={["#248ec2", "#1b67d3", "#1d35e2", "rgb(0, 0, 100)", "#000000"]}
      legendPosition="left"
      animation
    />
    </Box>
  );
}

export default Chart;

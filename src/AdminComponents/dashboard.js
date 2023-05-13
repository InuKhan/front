import React from "react";
import Table1 from '../Components/table';
import { DataGrid } from '@mui/x-data-grid';
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Icon,Button,
tableCellClasses,styled,Typography,Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import Chart from '../AdminComponents/chart';
import PieChart from "react-js-pie-chart";

const StyledPaper = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.primary.main};
    transform: scale(0.9);
  }
  `}
`;

const useStyles = makeStyles((theme) => ({
  
     head:{
       textAlign:'left',
       justifyContent: 'left',
       alignItems:'left',
       margin:'50px',
       paddingTop:'25px',
       color:"#073763",
     },
     avatarhead:{
       textAlign:'left',
       justifyContent: 'left',
       alignItems:'left',
       margin:'20px',
       paddingTop:'15px',
       color:"#073763",
     },
     secondhead:{
       textAlign:'left',
       justifyContent: 'left',
       alignItems:'left',
       margin:'30px',
       paddingTop:'2px',
       color:"#073763",
     },
     subhead:{
       textAlign:'left',
       justifyContent: 'left',
       alignItems:'left',
       margin:'2px',
       color:"#073763",
     },
     button:{
       color:"white",
       [theme.breakpoints.up("sm")]: {
         display: "block",
       },
       alignItems:"left",
       justifyContent:"left",
     },
     textAlign:"left",
   
   }));

const piedata= [
    { value: 1, name: "IMCA" , label: "IMCA"},
    { value: 2, name: "BJMCA" },
    { value: 3, name: "BSC" },
    { value: 4, name: "English" },
   
  ];
  

const AdminIMCA = () => {
    const classes = useStyles({ });

  return (
    <>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1100,
          height: 128,
        },
     
      }}
    >
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} >
       <Box  className={classes.avatarhead}>
       <VerifiedUserIcon fontSize="large"/>
        </Box>
        <Box  className={classes.head}>
        <Typography variant="h3">Welcome Admin!</Typography>
      <Typography variant="body1" sx={{color:"green", fontWeight:"100px"}}>Applications for NOC need your approval</Typography>
      </Box>
      </Stack>
      </Paper>
    </Box>
   
   <Stack  direction="row" spacing={2}> 
   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 370,
        },
      }}
    >
       <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={4}>
        <Box  className={classes.secondhead}>
        <Typography variant="h6">Total Applications received</Typography>
      <Typography variant="h4" sx={{color:"green", fontWeight:"100px"}}>1786542</Typography>
      </Box>
      </Stack>
      <Stack direction="row" spacing={1}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <FormatListNumberedRtlIcon fontSize="large" elevation={3}/>
        </Box>
        <Box  className={classes.subhead}>
        <Typography variant="h5">+13526</Typography>
      <Typography variant="body1" sx={{color:"green"}}>this month</Typography>
      </Box>
      </Stack>
      <Box className={classes.button}>
      <Stack direction="column" spacing={2}   paddingRight={4} paddingTop={2} marginLeft='25px'paddingBottom={4}>
        <Button  variant="contained" size="small" sx={{backgroundColor:"green"}} >View Approved Apllications</Button>
        <Button variant="contained" size="small" sx={{backgroundColor:"orange"}} >View Pending Apllications</Button>
        <Button variant="contained"size="small" sx={{backgroundColor:"red"}} >View Rejected Apllications</Button>
      </Stack>
      </Box>
      </Paper>
      </StyledPaper>
    </Box>

  
    <Box paddingRight={20}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 370,
        },
      }}
    >
        <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={2}>
      </Stack>
      <Stack direction="row" spacing={1}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <PieChart
       elevation={3}
      data={piedata}
      width={50}
      height={50}
      thickness={60}
      colors={["green", "#1b67d3", "#91002a", "rgb(255,54,0)", "#245c4e"]}
      legendPosition="right"
      animation
    />
      </Box>
      </Stack>
      </Paper>
      </StyledPaper>
    </Box>
   
   
    </Stack>
    

    </>
  );
};

export default AdminIMCA;





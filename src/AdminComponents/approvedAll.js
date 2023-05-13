import React from "react";
import Table1 from '../Components/table';
import { DataGrid } from '@mui/x-data-grid';
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Icon,Button,
tableCellClasses,styled,Typography,Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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
       margin:'20px',
       paddingTop:'1px',
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
       alignItems:"center",
       justifyContent:"center",
     },
     textAlign:"center",
   
   }));


const ApprovedAll = () => {
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
       <CheckBoxIcon fontSize="large"/>
        </Box>
        <Box  className={classes.head}>
        <Typography variant="h3" >Approved Applications!</Typography>
      <Typography variant="body1" sx={{color:"green", fontWeight:"100px"}}>Approved applications of various streams</Typography>
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
          height: 195,
        },
      }}
    >
        <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={4}>
        <Box  className={classes.secondhead}>
        <Typography variant="h6">Total Approved Applications </Typography>
      <Typography variant="h4" sx={{color:"#fd9a12", fontWeight:"100px"}}>1786542</Typography>
      </Box>
      </Stack>
      <Stack direction="row" spacing={1} paddingBottom={2}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <FormatListNumberedRtlIcon fontSize="large" elevation={3}/>
        </Box>
        <Box  className={classes.subhead}>
        <Typography variant="h5">+13526</Typography>
      <Typography variant="body1" sx={{color:"green"}}>this month</Typography>
      </Box>
      <Box className={classes.button} paddingTop={1} paddingLeft={10}>
      <Button fullWidth variant="contained" size="small" sx={{backgroundColor:"#fd9a12", padding:"10px"}} >View Approved IMCA</Button>
      </Box>
      </Stack>
      </Paper>
      </StyledPaper>
    </Box>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 195,
        },
      }}
    >
        <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={4}>
        <Box  className={classes.secondhead}>
        <Typography variant="h6">Total Approved Applications </Typography>
      <Typography variant="h4" sx={{color:"#91002a", fontWeight:"100px"}}>1786542</Typography>
      </Box>
      </Stack>
      <Stack direction="row" spacing={1} paddingBottom={2}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <FormatListNumberedRtlIcon fontSize="large" elevation={3}/>
        </Box>
        <Box  className={classes.subhead}>
        <Typography variant="h5">+13526</Typography>
      <Typography variant="body1" sx={{color:"green"}}>this month</Typography>
      </Box>
      <Box className={classes.button} paddingTop={1} paddingLeft={10}>
      <Button fullWidth variant="contained" size="small" sx={{backgroundColor:"#91002a", padding:"10px"}} >View Approved BJMCA</Button>
      </Box>
      </Stack>
      </Paper>
      </StyledPaper>
    </Box>
   </Stack>

    <Stack  direction="row" spacing={2}> 
   
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 195,
        },
      }}
    >
        <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={4}>
        <Box  className={classes.secondhead}>
        <Typography variant="h6">Total Approved Applications </Typography>
      <Typography variant="h4" sx={{color:"#1b67d3", fontWeight:"100px"}}>1786542</Typography>
      </Box>
      </Stack>
      <Stack direction="row" spacing={1} paddingBottom={2}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <FormatListNumberedRtlIcon fontSize="large" elevation={3}/>
        </Box>
        <Box  className={classes.subhead}>
        <Typography variant="h5">+13526</Typography>
      <Typography variant="body1" sx={{color:"green"}}>this month</Typography>
      </Box>
      <Box className={classes.button} paddingTop={1} paddingLeft={10}>
      <Button fullWidth variant="contained" size="small" sx={{backgroundColor:"#1b67d3", padding:"10px"}} >View Approved BSC</Button>
      </Box>
      </Stack>
      </Paper>
      </StyledPaper>
    </Box>

   
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 195,
        },
      }}
    >
        <StyledPaper>
      <Paper elevation={3}>
        <Stack direction="row" spacing={4}>
        <Box  className={classes.secondhead}>
        <Typography variant="h6">Total Approved Applications </Typography>
      <Typography variant="h4" sx={{color:"green", fontWeight:"100px"}}>1786542</Typography>
      </Box>
      </Stack>
      <Stack direction="row" spacing={1} paddingBottom={2}>
       <Box  className={classes.subhead}  sx={{paddingLeft:'25px',}}>
       <FormatListNumberedRtlIcon fontSize="large" elevation={3}/>
        </Box>
        <Box  className={classes.subhead}>
        <Typography variant="h5">+13526</Typography>
      <Typography variant="body1" sx={{color:"green"}}>this month</Typography>
      </Box>
      <Box className={classes.button} paddingTop={1} paddingLeft={10}>
      <Button fullWidth variant="contained" size="small" sx={{backgroundColor:"green", padding:"10px"}} >View Approved ENGLISH</Button>
      </Box>
      </Stack>
      </Paper>
      </StyledPaper>
    </Box>
    </Stack>
    

    </>
  );
};

export default ApprovedAll;





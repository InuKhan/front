import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Box,Paper,Typography,Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import VisibilityIcon from '@mui/icons-material/Visibility';
const useStyles = makeStyles((theme) => ({
  
  head:{
    textAlign:'left',
    justifyContent: 'left',
    alignItems:'left',
    margin:'50px',
    paddingTop:'15px',
    color:"#073763",
  },
  avatarhead:{
    textAlign:'left',
    justifyContent: 'left',
    alignItems:'left',
    margin:'20px',
    paddingTop:'2px',
    color:"#073763",
  },
  checkboxSelection :{
    color:"#073763"
  }
}));

const columns = [
    { field: 'id', headerName: 'S.No', width: 70 },
    { field: 'regno', headerName: 'Registration Number', width: 250},
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'stream', headerName: 'Stream', width: 150 },
    { field: 'semester', headerName: 'Semester', width: 150 },
    { field: 'rollno', headerName: 'Roll No', width: 150 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'icon', headerName: 'View',width: 130 },
  ];
  
  const rows = [
    { id: 1, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: 'View' ,href: './admindashboard', },
    { id: 2, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 3, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 4, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 5, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 6, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 7, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 8, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    { id: 9, regno: 'CUS-17-GWC-26651', name: 'Jon', stream: 'IMCA', semester: '6th', rollno: '62516223', batch: '2017', icon: <VisibilityIcon/>, },
    
  
  ];
  
  const icons=[
   {icon: <VisibilityIcon/>} 
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
          width: 1500,
          height: 100,
        },
        paddingBottom:2,
      }}
    >
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} >
       <Box  className={classes.avatarhead}>
       <ImportantDevicesIcon fontSize="large"/>
        </Box>
        <Box  className={classes.head}>
        <Typography variant="h4">Integrated MCA(IMCA)</Typography>
      <Typography variant="body1" sx={{color:"green", fontWeight:"100px"}}>Applications for NOC need your approval</Typography>
      </Box>
      </Stack>
      </Paper>
    </Box>
   
     <div style={{ height: 570, width: '100%', padding: '10px', }}>
      <DataGrid sx={{fontSize:"16px",}}
        icons={
        <VisibilityIcon/>
         
      }
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={{
         onClick:{}
        }} 
      
      />
    </div>
    </>
  );
};

export default AdminIMCA;


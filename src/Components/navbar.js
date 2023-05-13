import React from "react";
import {AppBar,Toolbar,Typography,Button,Box,Stack,useMediaQuery,} from "@mui/material";
import { makeStyles } from '@mui/styles';
import Drawer from './Drawer';
import theme from "../theme";
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  buttonLg: {
    color:"white",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    alignItems:"left",
    justifyContent:"left",
    hover:{
      color:"white"
    }
  },
}));

const Navbar = () => {
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(theme);
  const classes = useStyles({ });
  const history=useHistory();

  return (
    <>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
    <Typography variant="h6" className={classes.logoLg} onClick={()=>{history.push('/')}}>
            One Window Clearance
          </Typography>
          <Typography variant="h6" className={classes.logoSm} onClick={()=>{history.push('/')}}>
           OWC
          </Typography>
          {isMatch ?  <Drawer/>
         : <>
      <Box display="flex" >
      <Stack direction="row" spacing={2}>
        <Button variant="contained"   className={classes.buttonLg} onClick={()=>{history.push('/studentLogin')}} activeStep>Student Login</Button>
        <Button variant="contained"  className={classes.buttonLg} onClick={()=>{history.push('/adminLogin')}}>Admin Login</Button>
        </Stack>
       </Box>
        </>
        }
      </Toolbar>
    </AppBar>
 
    </>
  );
};

export default Navbar;




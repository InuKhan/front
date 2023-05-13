

import React, {useState} from "react";
import { TextField, Button , Box, Grid, Stack, MenuItem, Typography,} from "@mui/material";
import Navbar from '../Components/navbar';
import { makeStyles } from '@mui/styles';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    gridbox: {
        display: "block",
        justifyContent: "center",
        alignItems:"center",
        padding:"60px",
        marginTop:"90px",
      },
    formbox: {
      display: "block",
      justifyContent: "center",
      alignItems:"center",
      padding:"60px",
      marginTop:"70px",
      border:"solid 1px #073763"
    },
    button: {
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
     },
     h2:{
        color:"#073763",
     },
     head:{
      textAlign:'center',
      justifyContent: 'center',
      alignItems:'center',
    },
  }));

  const department = [
    {
      value: 'Administration Section',
    },
    {
      value: 'Library',
    },
    {
      value: 'Physical Education',
    },
    {
      value: 'PG Department of Computer Application',
    },
  ];
 
const AdminLogin = () => {
    const classes = useStyles({ });
    // const history= useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [admintype, setAdmintype] = useState("")


    const [usernameError, setUsernameError] = useState(false)
    const [passwordError,  setPasswordError] = useState(false)
    const [admintypeError,  setAdmintypeError] = useState(false)

 
    const handleSubmit = async(event) => {
        event.preventDefault()
 
        setUsernameError(false)
        setPasswordError(false)
        setAdmintypeError(false)


 
        if (username === '') {
            setUsernameError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }
        if (admintype === '') {
            setAdmintypeError(true)
        } 
        if (username && password && admintype) {
            console.log(username, password, admintype)
        }
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer 12228492498479284917491498" 
          }
        };

        // try {
        //   const res = await axios.post('http://localhost:9090/StudentLogin', {regno:regno,datebirth:datebirth,programme:programme},config);
        //   console.log(res.data);
        //   if(res.data){
        //     localStorage.setItem("token",JSON.stringify(res.data.token));
        //   saveToken(res.data.token);
        //    setTimeout(()=>{
        //      history.push("/dashboard");
        //    },100)
        // }
    

        // else{
        //     alert("Invalid Details");
        // }  
        // } catch (err) {
        //   console.error(err.response.data);
        //   alert("invalid credentials");
        // }
    }

    // const saveToken = async (token) => {
    //   try {
    //     await axios.post('http://localhost:9090/api/save-token', { token:token});
    //     console.log('Token saved successfully!');
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    return ( 
        <>
        <Navbar/>
        <Grid container spacing={2} className={classes.gridbox}>
        <Box className={classes.formbox}>
            <Stack direction="row" spacing={2}>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <Box className={classes.head}>
       <Typography variant="h5" fontWeight="bold" gutterBottom  className={classes.h2}><AdminPanelSettingsIcon sx={{color:"#073763", marginRight:"15px"}}/>Admin Login </Typography></Box>
                <TextField 
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={username}
                    error={usernameError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                   <TextField
                    // id="outlined-select-currency"
                    select
                    label="Admin Type"
                    onChange={e => setAdmintype(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={admintype}
                    error={admintypeError}
                    fullWidth
                    sx={{mb: 3}}
                  >
                {department.map((option) => (
                   <MenuItem key={option.value} value={option.value}>
                   {option.value}
                   </MenuItem>
                ))}
        </TextField>
                 <Box className={classes.button}>
      <Button variant="contained" color="primary" type="submit" href="/adminDashboard">Login</Button>
    </Box>
        </form>
        </Stack>
        </Box>
        </Grid>
        </>
     );
}
 
export default AdminLogin;
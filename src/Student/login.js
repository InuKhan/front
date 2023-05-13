

import React, {useState} from "react";
import { TextField, Button , Box, Grid, Stack, MenuItem, Typography,} from "@mui/material";
import Navbar from '../Components/navbar';
import { makeStyles } from '@mui/styles';
import SchoolIcon from '@mui/icons-material/School';
import axios from "axios";
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

  const courses = [
    {
      value: 'Integrated MCA',
    },
    {
      value: 'BJMC',
    },
    {
      value: 'BSC',
    },
    {
      value: 'BA',
    },
  ];
 
const StudentLogin = () => {
    const classes = useStyles({ });
    const history= useHistory();

    const [regno, setRegno] = useState("")
    const [datebirth, setDatebirth] = useState("")
    const [programme, setProgramme] = useState("")

    const [regnoError, setRegnoError] = useState(false)
    const [datebirthError, setDatebirthError] = useState(false)
    const [programmeError, setProgrammeError] = useState(false)

 
    const handleSubmit = async(event) => {
        event.preventDefault()
 
        setRegnoError(false)
        setDatebirthError(false)
        setProgrammeError(false)

 
        if (regno === '') {
            setRegnoError(true)
        }
        if (datebirth === '') {
            setDatebirthError(true)
        }
        if (programme === '') {
            setProgrammeError(true)
        } 
        if (regno && datebirth && programme) {
            console.log(regno, datebirth, programme)
        }
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer 12228492498479284917491498" 
          }
        };

        try {
          const res = await axios.post('http://localhost:9090/StudentLogin', {regno:regno,datebirth:datebirth,programme:programme},config);
          console.log(res.data);
          if(res.data){
            localStorage.setItem("token",JSON.stringify(res.data.token));
          saveToken(res.data.token);
           setTimeout(()=>{
             history.push("/dashboard");
           },100)
        }
    

        else{
            alert("Invalid Details");
        }  
        } catch (err) {
          console.error(err.response.data);
          alert("invalid credentials");
        }
    }

    const saveToken = async (token) => {
      try {
        await axios.post('http://localhost:9090/api/save-token', { token:token});
        console.log('Token saved successfully!');
      } catch (error) {
        console.error(error);
      }
    };

    return ( 
        <>
        <Navbar/>
        <Grid container spacing={2} className={classes.gridbox}>
        <Box className={classes.formbox}>
            <Stack direction="row" spacing={2}>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <Box className={classes.head}>
       <Typography variant="h5" fontWeight="bold" gutterBottom  className={classes.h2}><SchoolIcon sx={{color:"#073763", marginRight:"15px"}}/>Student Login </Typography></Box>
                <TextField 
                    label="University Registration Number"
                    onChange={e => setRegno(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={regno}
                    error={regnoError}
                 />
                 <TextField 
                    // label="Date of birth"
                    onChange={e => setDatebirth(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="date"
                    value={datebirth}
                    error={datebirthError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                   <TextField
                    // id="outlined-select-currency"
                    select
                    label="Programme"
                    onChange={e => setProgramme(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={programme}
                    error={programmeError}
                    fullWidth
                    sx={{mb: 3}}
                  >
                {courses.map((option) => (
                   <MenuItem key={option.value} value={option.value}>
                   {option.value}
                   </MenuItem>
                ))}
        </TextField>
                 <Box className={classes.button}>
      <Button variant="contained" color="primary" type="submit">Login</Button>
    </Box>
        </form>
        </Stack>
        </Box>
        </Grid>
        </>
     );
}
 
export default StudentLogin;
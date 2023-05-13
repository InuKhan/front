import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Alert,Stack,Grid} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    gridbox: {
        display: "block",
        justifyContent: "center",
        alignItems:"center",
        padding:"60px",
        marginTop:"90px",
      },
   
  }));

export default function Status() {
  const classes = useStyles({ });
  return (
    <Grid container spacing={2} className={classes.gridbox}>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
    </Grid>
  );
}
import  React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Typography,Icon,Box,Button} from '@mui/material';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import BadgeIcon from '@mui/icons-material/Badge';

const useStyles = makeStyles((theme) => ({
    button: {
        textAlign:"center",
        padding:"20px",
     },
  
  }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const rows = [
    {  icon: <RemoveFromQueueIcon sx={{fontSize:"medium"}}/>, name: "Name", value:"Insha"},
    {  icon:  <RemoveFromQueueIcon sx={{fontSize:"medium"}}/>, name: "Email", value:"inushakhan123@gmail.com"},
    {  icon:  <RemoveFromQueueIcon sx={{fontSize:"medium"}}/>, name: "Phone", value:"+919596251028"},

];

const lnk = [
  {  icon: <BadgeIcon sx={{fontSize:"medium"}}/>, name: "NAD DigiLocker", value:"https://nad.digilocker.gov.in/"},
  {  icon:  <LibraryBooksIcon sx={{fontSize:"medium"}}/>, name: "National Digital Library", value:"https://ndl.iitkgp.ac.in/"},
  {  icon:  <CastForEducationIcon sx={{fontSize:"medium"}}/>, name: "Swayam Online Courses", value:"https://swayam.gov.in/"},
  {  icon:  <PlayLessonIcon sx={{fontSize:"medium"}}/>, name: "Spoken Tutorials", value:"https://ndl.iitkgp.ac.in/"},  
];

export default function Tables() {
    const classes = useStyles({ });
    const history = useHistory();
  return (
    <>
    <TableContainer sx={{ maxWidth: 900,}} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><Typography variant="h5" sx={{alignItems:"center"}}>Student Details</Typography></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <>
            <StyledTableRow key={row} disablePadding>
              <StyledTableCell align="left"  scope="row"><Icon sx={{marginRight:"10px"}}>{row.icon}</Icon> {row.name}</StyledTableCell>
              <StyledTableCell align="left"  scope="row">{row.value}</StyledTableCell>
            </StyledTableRow>
           </>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.button}>
      <Button sx={{ maxWidth: 300,}} variant="contained" color="primary" type="submit" onClick={()=>{history.push("/status")}}>Get NOC</Button>
    </Box>

    </TableContainer>
    <Accordion defaultExpanded={true} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" color="#073763">Digital Initiatives</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxWidth: 900 }}>
          <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
             <Table aria-label="customized table">
              <TableBody>
                {lnk.map((links) => (
                  <>
                    <StyledTableRow key={links.name}>
          <Typography>
                      <StyledTableCell  component="th" scope="row" align="left">
                      <a href={links.value} underline="none" target="_blank" rel="noopener" variant="body1" > {links.icon} &nbsp;{links.name}</a>
                         </StyledTableCell>
                           </Typography>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>   
        </AccordionDetails>
      </Accordion>  

</>
  );
}
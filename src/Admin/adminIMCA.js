import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Link} from "@mui/material";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// import { useHistory } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RadioIcon from '@mui/icons-material/Radio';
import ScienceIcon from '@mui/icons-material/Science';
import RecommendIcon from '@mui/icons-material/Recommend';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import IMCA from'../AdminComponents/imca';
const useStyles = makeStyles((theme) => ({
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  sidemenu:{
    display: "flex",
    justifyContent: "space-between",
    color:"#073763",
   
  },

}));

const drawerWidth = 240;

const dash = [
    { name: "Dashboard", icon: <SpaceDashboardIcon/> , to: '/adminDashboard' },
    ];

const data = [
    { name: "IMCA", icon: <KeyboardHideIcon/> , to: '/adminIMCA' },
    { name: "BJMCA", icon:  <RadioIcon />,  to: '/admindashboard' },
    { name: "BSC", icon:  <ScienceIcon />,  to: '/admindashboard' },
    { name: "ENGLISH", icon:  <MenuBookIcon />,  to: '/admindashboard' },
  ];

  const noc = [
    { name: "Approved", icon: <RecommendIcon/> , to: '/approvedDashboard' },
    { name: "Pending", icon:  <PendingIcon />,  to: '/admindashboard' },
    { name: "Rejected", icon:  <CancelIcon />,  to: '/admindashboard' },
  ];

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  
const AdminDashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const history=useHistory();
    
   
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles({ });
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const [auth, ] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  
    const drawer = (
        <div >
          <Toolbar />
          <Divider />
          <List>
            {dash.map((item) => (
              <ListItem key={item} disablePadding className={classes.sidemenu} >
                <ListItemButton className={classes.sidemenu}>
                  <Stack direction="row" spacing={4}>
                  <ListItemIcon className={classes.sidemenu} sx={{color:"#073763"}}>
                    {item.icon} &nbsp;&nbsp;&nbsp;&nbsp;  
                  <Link className='active' className={classes.sidemenu} href={item.to} sx={{textDecoration:"none", fontWeight:"20px"}}><ListItemText primary={item.name}/></Link>
                  </ListItemIcon>
                  </Stack>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" paddingLeft={4}  paddingTop={3} color="primary"><strong>Departments</strong></Typography>
          <List>
            {data.map((item) => (
              <ListItem key={item} disablePadding className={classes.sidemenu} >
                <ListItemButton className={classes.sidemenu}>
                  <Stack direction="row" spacing={4}>
                  <ListItemIcon className={classes.sidemenu} sx={{color:"#073763"}}>
                    {item.icon} &nbsp;&nbsp;&nbsp;&nbsp;  
                  <Link className={classes.sidemenu} href={item.to} sx={{textDecoration:"none", fontWeight:"20px"}}><ListItemText primary={item.name}/></Link>
                  </ListItemIcon>
                  </Stack>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" paddingLeft={4}  paddingTop={3} color="primary"><strong>Applications(NOC)</strong></Typography>
          <List>
            {noc.map((item) => (
              <ListItem key={item} disablePadding className={classes.sidemenu} >
                <ListItemButton className={classes.sidemenu}>
                  <Stack direction="row" spacing={4}>
                  <ListItemIcon className={classes.sidemenu} sx={{color:"#073763"}}>
                    {item.icon} &nbsp;&nbsp;&nbsp;&nbsp;  
                  <Link className={classes.sidemenu} href={item.to} sx={{textDecoration:"none", fontWeight:"20px"}}><ListItemText primary={item.name}/></Link>
                  </ListItemIcon>
                  </Stack>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      );
  
    
  return (
    <>
   <Box sx={{ display: 'flex', flexGrow: 1}}>
  
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack spacing={4} direction='row'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
          <Stack spacing={1} direction="row">
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>

    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="success" >
        <NotificationsActiveIcon />
      </Badge>
    </IconButton>
  
      {auth && (
            <div>
                
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle size="large"/>
              </IconButton>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Add Admin</MenuItem>
                <MenuItem onClick={handleClose}>Change Password</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
            </Stack>
        </Toolbar>
      </AppBar>
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <IMCA/>
      </Box>
    </Box>

        
    </>
  );
};

export default AdminDashboard;








import * as React from 'react';
import {Box,Link} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const data = [
    { name: "Student Login", icon: <SchoolIcon /> , to: '/studentLogin' },
    { name: "Admin Login", icon:  <AdminPanelSettingsIcon />,  to: '/instructions' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{color:"#073763"}}>
        {data.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"#073763"}}>
              {index % 2 === 0 ? <SchoolIcon/> : <AdminPanelSettingsIcon />}
              </ListItemIcon>
              <Link href={item.to} sx={{textDecoration:"none"}}><ListItemText primary={item.name} /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <DragHandleIcon sx={{color:"white"}} onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
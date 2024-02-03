import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const inboxData = [
    { key: 'Inbox', data: 'Inbox data will be coming from an API or database' },
    { key: 'Starred', data: 'Starred data will be coming from an API or database' },
    { key: 'SendEmail', data: 'Send Email data will be coming from an API or database' },
    { key: 'Drafts', data: 'Drafts data will be coming from an API or database' }
  ];

  const [selectedKey , setSelectedKey] = useState(null)
  const [selectedData , setSelectedData] = useState('') 
  
  const handleClick = (key)=>{
      const fetchData = inboxData.find((item)=>item.key===key)?.data || ""; 
     
      setSelectedKey(key);
      setSelectedData(fetchData);
    }
  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {inboxData.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={()=>handleClick(item.key)}>
                  <ListItemIcon>
                    {item.key === 'Inbox' ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.key} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
        <div>
          <h2>{selectedKey}</h2>
          <p>{selectedData}</p>
        </div>
        </Typography>
        <Typography paragraph>

        </Typography>
      </Box>
    </Box>
  );
}

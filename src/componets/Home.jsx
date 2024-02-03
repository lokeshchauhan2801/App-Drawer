import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from 'react-router-dom'
import {linkStyle} from '../constant/constant'

export default function Home() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
          <Link to='/clippedDrawer' style={linkStyle}>
            <MenuItem onClick={popupState.close}> Drawer</MenuItem>
            </Link>
            <Link to='/appDrawer' style={linkStyle}>
            <MenuItem onClick={popupState.close}>Second Drawer </MenuItem>
            </Link>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
     
        
        </React.Fragment>
      )}
    </PopupState>
  );
}

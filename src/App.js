
// import logo from './logo.svg';
import React from 'react';
import { AppBar, IconButton, Toolbar, Typography ,SwipeableDrawer,Box} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './App.css';
import Home from '@material-ui/icons/Home';
import PhotoIcon from '@material-ui/icons/Photo';
import ContactsIcon from '@material-ui/icons/Contacts';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export default function App() {
   const [open,setopen] = React.useState(false);
 
  return (
    <div>
      <AppBar  className="Appbar">
        <Toolbar style={{display:'flex'}} >
          <IconButton style={{right:'20rem'}} edge="start" color="inherit" onClick={()=>setopen(true)} >
            <MenuRoundedIcon fontSize="large"/>
            </IconButton>
            <div style={{display:'block',top:'5.5rem'}}>
          <Typography variant="h5" style={{fontWeight:'bold'}}>
          ಕರ್ನಾಟಕ ರಾಜ್ಯ ರೆಡ್ಡಿ ನೌಕರರ ಕ್ಷೇಮಾಭಿವೃದ್ಧಿ ಸಂಘ (ರಿ)-ಬೆಂಗಳೂರು
          </Typography>
          <Typography variant="h5"  style={{fontWeight:'bold'}} >
          Karnataka State Reddy Employees Welfare Association ®-Bangalore
          </Typography>
          </div>
        </Toolbar>
        </AppBar>
        <SwipeableDrawer open={open}
        onClose={()=>setopen(false)}>
         <div style={{width:'250px'}}>
         <Box textAlign="center" p={2}>
            Contents
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => {console.log('Container')}}>
             <Home style={{paddingRight:'5px'}} fontSize="small"/> <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button onClick={() => {console.log('Grid')}}>
             <PhotoIcon style={{paddingRight:'5px'}} fontSize="small"/> <ListItemText primary={'Gallery'} />
            </ListItem>
            <ListItem button onClick={() => {console.log('Box')}}>
             <ContactsIcon style={{paddingRight:'5px'}} fontSize="small"/> <ListItemText primary={'Contact Us'} />
            </ListItem>
            <ListItem button onClick={() => {console.log('Cards')}}>
            <GroupWorkIcon style={{paddingRight:'5px'}} fontSize="small"/> <ListItemText primary={'Mission'} />
            </ListItem>
          </List>
         </div>

        </SwipeableDrawer>
     
    </div>
  );
}



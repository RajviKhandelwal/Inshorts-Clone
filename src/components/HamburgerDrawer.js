import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {  createTheme,  useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import categories from "../data/category";





export default function SwipeableTemporaryDrawer({setCategory}) {
// const classes= useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });

  

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = React.useMemo(
      ()=>
      createTheme({
          palette:{
              type: prefersDarkMode ? "dark" : "light",
          },
      }),
      [prefersDarkMode]
    );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          <ListItem  disablePadding style={{height:60,borderRadius:3,fontWeight:40}}>
            Categories
          </ListItem>
        }
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} style={{height:40,borderRadius:3}}>
            <ListItemButton onClick={()=>setCategory(text)}>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon/></Button>
          <ThemeProvider theme={theme}>
            <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>
          </ThemeProvider>
          
        </React.Fragment>
      
    </div>
  );
}
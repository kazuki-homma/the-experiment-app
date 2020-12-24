import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => (
    createStyles({
        "menuButton": {
            
        },
        "title": {

        },
        "navButtons": {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
        }
    })
));

const Navbar = (props) => {
    const classes = useStyles();

    return(
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Ex.app
            </Typography>
            <div className={classes.navButtons}>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign up</Button>
            </div>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar;
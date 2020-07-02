/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Spotenu
            </Typography>
            <Button color="inherit">Administrador</Button>
            |
            <Button color="inherit">Inscrever-se</Button>
            <Button color="inherit">Entrar</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
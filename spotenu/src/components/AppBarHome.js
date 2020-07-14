import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';


import styled from "styled-components";

export const LogoSpotenu = styled.img`
   margin: -15px;
   max-width: 8vw;
   max-height:7vh;
   cursor: pointer;
   @media(max-width: 736px) { 
    margin: -4px;
    padding: 10px 0 0  0px;
  }
`

const LogoBar = styled.div `
  margin: -60px;
  padding: 0 0 0  120px;
  color: white;
  font-family: 'Montserrat';
  font-size: 200%;
  cursor: pointer;
  @media(max-width: 736px) { 
    margin: -57px;
    padding: 0 0 0 75px;
    display: block;
    font-size: 20px
  }
`

const Button = styled.button`
  background-color: transparent; 
  border: none;
  padding: 1% 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1%;
  cursor: pointer;
  color: white;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: #1ed760;
  }
  
  @media(max-width: 736px) { 
    width: 20%; 
    left: 8%;
    font-size: 11px;
    display: block;
  }
`
const useStyles = makeStyles(theme => ({
    root: {
      height: 90,
    },
    toolbar: {
      justifyContent: 'flex-end',
    },
    title: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
   
  }));
  
  function ButtonAppBarHome(props) {
    const classes = useStyles();
    return (
      <AppBar className={classes.root} color='primary' position="static">
        <Toolbar className={classes.toolbar}>
          <Button size="small" color="inherit" className={classes.margin} onClick={props.onClick}>{props.btnText}</Button>|
          <Button size="small" color="inherit" className={classes.margin} onClick={props.onnClick}>{props.btnTextBand}</Button>|
          <Button size="small" color="inherit" className={classes.margin} onClick={props.onnnClick}>{props.btnTextAdm}</Button>

        </Toolbar>
        <LogoBar>
          <LogoSpotenu src={require("../image/iconspoti.png")}/>
            {props.pageName}
        </LogoBar>
      </AppBar>
    )
  }
  
  export default ButtonAppBarHome;
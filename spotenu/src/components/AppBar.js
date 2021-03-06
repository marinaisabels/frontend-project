import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';


import styled from "styled-components";

export const LogoSpotenu = styled.img`
   margin: -7px;
   max-width: 6vw;
   max-height:7vh;
   cursor: pointer;
   @media(max-width: 736px) { 
    margin: -4px;
    padding: 10px 0 0  0px;
  }
`

const LogoBar = styled.div `
  margin: -50px;
  padding: 0px 0 0  70px;
  color: white;
  font-family: 'Montserrat';
  font-size: 200%;
  cursor: pointer;
  @media(max-width: 736px) { 
    width: -10%;
    margin: -40px;
    left: 9%;
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
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: #1ed760;
  }
  
  @media(max-width: 736px) { 
    width: 28%;
    left: 18%;
    display: block;
  }
`
const useStyles = makeStyles(theme => ({
    root: {
      height: 69,
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
  
  function ButtonAppBar(props) {
    const classes = useStyles();
    return (
      <AppBar className={classes.root} color='primary' position="static">
        <Toolbar className={classes.toolbar}>
          <Button size="small" color="inherit" className={classes.margin} onClick={props.onnClick}>{props.btnnText}</Button>|
          <Button size="small" color="inherit" className={classes.margin} onClick={props.onClick}>{props.btnText}</Button>
        </Toolbar>
        <LogoBar>
          <LogoSpotenu src={require("../image/iconspoti.png")}/>
            {props.pageName}
          </LogoBar>
      </AppBar>
    )
  }
  
  export default ButtonAppBar
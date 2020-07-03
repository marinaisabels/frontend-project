/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import ButtonAppBar from "../../style/AppBar";
import styled, { keyframes } from 'styled-components'

const Logo = styled.img`
  width:100%;
  max-width:100%;
  @keyframes fading{
    0% { opacity: 0 };
    100% { opacity: 1 };
}
`
export function Home(){
    
    return (
        <diV>
          <ButtonAppBar/>
          <Logo src={require("../../image/fotoprincipal.png")} />
        </diV>
    )
}
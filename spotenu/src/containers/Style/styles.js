import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#F5F5F5
`
export const LongPageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#F5F5F5;
  .fa-spinner{
    color:#4472C4;
    margin-top: 50%
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#F5F5F5;
`
export const LongContentWrapper = styled(ContentWrapper)`
  min-height: calc(100vh - 80px); 
  justify-content:flex-start;
  flex-direction:column;
`
export const FormStyle = styled.form`
  width: 35%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  @media (max-width: 904px) {
    width:80%;
  }
  @media (max-width: 500px) {
    width:90%;
  }
`
export const LongFormStyle = styled(FormStyle)`
  width: 70%;
  margin: 15px 0;
`
export const Button = styled.button `
  background-color: #1db954 ; 
  width: 15vw;
  height: 7vh;
  border: none;
  border-radius: 5em / 5em;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #1ed760;
  }
  
  @media(max-width: 736px) { 
    width: 50%;
    left: 10%;
    display: block;
  }
`

export const Text = styled.h3`
  color: #1db954;
  font-family: 'Montserrat';
  font-size: 14px;
  cursor: pointer;
`

export const ButtonSignup = styled.button `
  background-color: #1db954 ; 
  width: 32vw;
  height: 8vh;
  border: none;
  border-radius: 5em / 5em;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #1ed760;
  }
  
  @media(max-width: 736px) { 
    width: 90%;
    left: 5%;
    display: block;
  }
`

export const Background = styled.img`
width: 98vw;
height: 77vh;
@media(max-width: 736px) { 
    width: 100%;
    height: 140%;
    display: block;
  }
`
export const ContainerPlaylist = styled.div`
  margin: -30%;
  padding: 0 0 0 650px;
  color: white;
  width: 90%;
  height: 35%;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Montserrat';
  @media(max-width: 736px) { 
    margin: -120%;
    padding: 0 0 0 132%;
    width: 190%;
    font-size:13px;
    display: block;
  }
`
export const ContainerCovers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20% 35%;
  padding: 0px 0px 0px 70px;
  width: 60vw;
  height: 25vh;
  @media(max-width: 736px) {
    display: block;
  }
`

export const Photo = styled.img`
padding: 20px 0 0 0px;
max-width: 100%;
max-height: 100%;
@media(max-width: 736px) {
  padding: 2px; 
    max-width:53%;
    max-height:40%; 
  }
`

export const Footer = styled.div`
   font-size: 12px;
   position: absolute;
   bottom: 0;
   width: 98vw;
   height: 10%;
   background-color: black;
   font-family: 'Montserrat';
   color: grey;
   text-align: center;
   @media(max-width: 736px) { 
    width: 106%;
    display: block;
  }
`
export const ContainerPage = styled.div`
width: 98vw;
height: 60vh;
@media(max-width: 736px) { 
    width: 110%;
    right: 0;
    display: block;
  }
`
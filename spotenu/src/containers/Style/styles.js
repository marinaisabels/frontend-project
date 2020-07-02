import styled from 'styled-components'

export const LogoSpotenu = styled.img`
   max-width:70px;
   max-height:40px;
`

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

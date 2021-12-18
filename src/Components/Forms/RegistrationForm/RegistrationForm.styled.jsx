import styled from '@emotion/styled'
import {Dialog} from "@mui/material";
import registrationForm from '../../../Assets/Images/registrationForm.png'
import "@fontsource/bubblegum-sans";


export const StyledDialog = styled(Dialog)`
 .MuiPaper-root {
   background-image: url(${registrationForm});
   min-height: 540px;
   min-width: 900px;
   background-repeat: no-repeat;
   background-size: cover;
/*   width: 100%;
   height: ${window.innerHeight - 75}px;*/
   position: relative;
   margin: 0;


 }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 .registrationConfirm{
   position: absolute;
   right: 10px;
   bottom: 10px;
   background: none;
   border: none;
   
   font-family: 'Bubblegum Sans',cursive ;
   font-size: 48px;
   font-style: normal;
   font-weight: 400;
   line-height: 74px;
   letter-spacing: 0;
   text-align: left;
   text-transform: none;

   color: black;
 }
  .close {
    position: absolute;
    right: 0;
    top: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  
  .MuiInput-root{
    width: 500px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .MuiInput-root:after{
    border-bottom-color: black;
  }
  label{
    width: 242px;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    display: flex;
    align-items: flex-start;
    color: #000000;
    &::before, &::after {
      display: none;
    }
  }
  .MuiDialogContent-root{
    padding: 0;
    justify-content: flex-start;
    
  }
  .registration-form{
    justify-content: flex-start;
    margin-left: 30px;
  }
  .MuiTextField{
    margin-left: 0;
  }
  
  h1{
    margin-top: 0;
    margin-bottom: 5px;
    font-family: 'Roboto Slab', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    align-items: center;
  }
`
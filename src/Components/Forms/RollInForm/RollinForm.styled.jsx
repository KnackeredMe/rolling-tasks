import styled from "@emotion/styled";
import {Dialog} from "@mui/material";
import backgroundRollin from '../../../Assets/Images/backgrondRollin.png'

export const StyledDialog = styled(Dialog)`
    .MuiPaper-root{
      background-image: url(${backgroundRollin});
      min-height: 500px;
      min-width: 500px;
      background-repeat: no-repeat;
      background-size: cover;
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
    bottom: 75px;
    right:225px;
    background: none;
    border: none;

    font-family: 'Bubblegum Sans', cursive;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 74px;
    letter-spacing: 0;
    text-align: center;
    text-transform: none;

    color: black;
  }
  
  .authorizationError {
    position: absolute;
    bottom: 55px;
    right: 188px;
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
    font-size: 24px;
    display: flex;
    align-items: flex-start;
    color: #000000;
    &::before, &::after {
      display: none;
    }
  }
  .MuiDialogContent-root{
    padding: 20px;
    justify-content: flex-start;

  }
  .registration-form{
    justify-content: flex-start;
    margin-left: 30px;
  }
  .MuiTextField{
    margin-left: 0;
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

`

import styled from '@emotion/styled';
import {Dialog} from "@mui/material";

export const StyledTicketDetails= styled(Dialog)`
    .MuiPaper-root {
      background-size: cover;
      min-height: 700px;
      min-width: 700px;
      position: relative;
      padding: 30px;
    }
  
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  
    .MuiDialogContent-root {
      label {
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
      }
    }
  
    .MuiInput-root {
      border: none;
      input {
        border: none;
      }
      &::before, &::after {
        display: none;
      }
    }
  
    .row-color {
      display: flex;
      flex-direction: column;
      width: 80px;
      margin-left: 10px;
      .MuiInput-root {
        padding-left: 0;
      }
    }
  
    .row-name {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  
    .MuiButton-root {
      font-family: 'Roboto Slab', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: black;
      &:hover {
        background-color: transparent;
      }
    }
`

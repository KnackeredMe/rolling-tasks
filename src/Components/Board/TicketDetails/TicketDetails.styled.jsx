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
      grid-template-columns: 1.2fr 0.8fr;
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
  
    h1 {
      display: flex;
      align-items: center;
      input {
        margin-left: 10px;
        font-size: 26px;
        font-weight: 600;
      }
      svg {
        margin-right: 10px;
      }
    }
    
    .select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .MuiSelect-select {
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin-left: 5px;
        }
      }
      fieldset {
        border: none;
      }
      &-wrapper {
        margin-top: 20px;
        box-shadow: -4px 4px 4px rgb(0 0 0 / 25%);
        border-radius: 5px;
        padding-bottom: 30px;
      }
    }
`

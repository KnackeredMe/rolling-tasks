import styled from '@emotion/styled'
import {Dialog} from "@mui/material";
import addTask from '../../../Assets/Images/addTask.png'

export const StyledNewTaskForm = styled(Dialog)`
    .MuiPaper-root {
      background-image: url(${addTask});
      background-size: cover;
      min-height: 500px;
      min-width: 500px;
      position: relative;
    }
  
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
  
    .MuiDialogContent-root {
      label {
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
      }
    }
  
    .MuiInput-root {
      margin-top: 20px;
      padding-left: 10px;
      background-color: white;
      height: 40px;
      box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
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
  
    .select {
      display: flex;
      justify-content: space-between;
      height: 40px;
      margin-top: 10px;
      position: relative;
      &-message {
        position: absolute;
        right: 0;
        bottom: -10px;
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

    fieldset {
      border: none;
    }
  
    .MuiSelect-select {
      display: flex;
      align-items: center;
    }
  
    .select-item {
      svg {
        margin-left: auto;
      }
    }
    
`

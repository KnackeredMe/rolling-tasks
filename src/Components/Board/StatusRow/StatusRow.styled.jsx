import styled from '@emotion/styled'


export const StyledStatusRow = styled.div`
    height: 200px;
    position: relative;
    .rowName {
      height: 60px;
      background-color: ${props => props.rowColor};
      color: white;
      padding-left: 10px;
      border-radius: 5px;
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
    }
    .ticketList {
      position: absolute;
      left: 100px;
      top: 35px;
      z-index: 1;
      display: flex;
    }

  .deleteButton {
    position: absolute;
    top: 50px;
    background-color: transparent;
    border: none;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    svg {
      fill: white;
    }
  }
  .editButton {
    position: absolute;
    top: 50px;
    left: 30px;
    background-color: transparent;
    border: none;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    svg {
      fill: white;
    }
  }
  
    &:hover {
      .deleteButton {
        transition: opacity 0.2s ease-in-out;
        opacity: 1;
      }
      .editButton {
        transition: opacity 0.2s ease-in-out;
        opacity: 1;
      }
    }
  
`

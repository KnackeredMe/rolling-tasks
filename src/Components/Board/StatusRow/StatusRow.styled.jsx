import styled from '@emotion/styled'


export const StyledStatusRow = styled.div`
    position: relative;
    min-height: 60px;
    margin-bottom: 10px;
    .rowName {
      height: 60px;
      background-color: ${props => props.rowColor};
      color: white;
      border-radius: 5px;
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
      margin-top: 0;
      span {
        padding-left: 10px;
      }
    }
    .ticketList {
      padding-top: 35px;
      padding-left: 0;
      margin: 0 0 0 6%;
      padding-bottom: 10px;
      z-index: 1;
      display: flex;
      width: 94%;
      overflow-x: scroll;
    }

  .deleteButton {
    position: absolute;
    top: 30px;
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
    top: 30px;
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

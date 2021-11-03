import styled from '@emotion/styled'

export const StyledTicketItem = styled.li`
    width: 150px;
    background-color: white;
    list-style: none;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    margin-right: 20px;
    .ticketName {
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 5px;
    }
    .ticketInfo {
      padding: 0;
    }
    .ticketInfoItem {
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: center;
      height: 20px;
      font-size: 12px;
    }
    .userPhoto {
      width: 20px;
      height: 20px;
    }
`

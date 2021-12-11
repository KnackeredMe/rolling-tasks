import styled from '@emotion/styled'

export const StyledTicketItem = styled.li`
    width: 200px;
    background-color: white;
    list-style: none;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    margin-right: 20px;
    .ticket {
      &__name {
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      &__info {
        padding: 0;
        &-item {
          font-weight: 600;
          margin-bottom: 4px;
          display: flex;
          list-style: none;
          justify-content: space-between;
          align-items: center;
          height: 20px;
          font-size: 12px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }
        &-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        &-value {
          display: flex;
          align-items: center;
        }
      }
    }
  
    .userPhoto {
      width: 20px;
      height: 20px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`

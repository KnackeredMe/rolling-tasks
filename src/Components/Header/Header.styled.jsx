import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  padding: 15px 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  .container {
    display: flex;
    align-items: center;
  }

  .rollOutIcon {
    width: 20px;
    margin-left: 10px;
  }

  .navItem {
    a {
      display: flex;
      align-items: center;
    }

  }

  .current-user {
    color: black;
  }
`
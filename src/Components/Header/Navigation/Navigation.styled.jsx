import styled from '@emotion/styled'
import buttonBackground from '../../../Assets/Images/buttonBackground.png'

export const StyledNavigation = styled.nav`
    margin-left: auto;
    display: flex;
    align-items: center;
    .navItem {
      margin-left: 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FF1F00;
      cursor: pointer;
      a {
        color: inherit;
        text-decoration: none;
      }
      .activeLink {
        width: 100px;
        height: 40px;
        background-image: url(${buttonBackground});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
`

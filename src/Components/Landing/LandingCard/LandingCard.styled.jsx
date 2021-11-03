import styled from '@emotion/styled'

export const StyledLandingCard = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props =>props.left};
    right: ${props => props.right};
    .background {
      width: 100%;
      height: 100%;
    }
    .overlay {
      background: rgba(255, 255, 255, 0.5);
      position: absolute;
      width: 99%;
      height: 98%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        margin-top: 30px;
      }
      p {
        text-align: center;
        width: 170px;
      }
    }
`

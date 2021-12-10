import styled from '@emotion/styled'

export const StyledLandingCard = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    width: 200px;
    height: 200px;
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props =>props.left};
    right: ${props => props.right};
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2);
    .overlay {
      background: rgba(255, 255, 255, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
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

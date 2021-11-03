import styled from '@emotion/styled'
import landingBackground from '../../Assets/Images/landingBackground.jpg'

export const StyledLanding = styled.div`
    background-image: url(${landingBackground});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: ${window.innerHeight - 75}px;
    position: relative;

    .landingText {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      text-indent: 40px;
    }
  
    .landingHeading {
      margin: 0;
      font-size: 36px;
    }
  
    .landingArticle {
      padding-top: 40px;
      width: 500px;
      max-height: 300px;
      margin-left: 100px;
    }
`

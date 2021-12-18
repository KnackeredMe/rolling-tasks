import styled from '@emotion/styled'
import landingBackground from '../../Assets/Images/landingBackground.jpg'

export const StyledLanding = styled.div`
    background-image: url(${landingBackground});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;

    .landingText {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.5);
      text-indent: 40px;
    }
  
    .landingHeading {
      margin: 0;
      font-size: 36px;
      text-indent: 40px;
    }
  
    .landingArticle {
      padding-top: 40px;
      width: 600px;
      max-height: 300px;
    }
`

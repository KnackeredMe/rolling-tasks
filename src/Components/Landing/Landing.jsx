import React, {Component} from 'react';
import {StyledLanding} from "./Landing.styled";
import LandingCard from "./LandingCard/LandingCard";
import Rectangle4 from "../../Assets/Images/Landing/Rectangle4.png"
import Rectangle5 from "../../Assets/Images/Landing/Rectangle5.png"
import Rectangle6 from "../../Assets/Images/Landing/Rectangle6.png"
import Rectangle7 from "../../Assets/Images/Landing/Rectangle7.png"
import {Container} from "../Container/Container";

export class Landing extends Component {
    render() {
        return (
            <StyledLanding>
                <Container>
                    <article className={'landingArticle'}>
                        <h1 className={'landingHeading'}>Our goals</h1>
                        <p className={'landingText'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque fermentum sollicitudin enim, in egestas velit.
                            Phasellus quis lobortis risus. Proin ac scelerisque tellus.
                            Vestibulum hendrerit, sapien condimentum tincidunt
                            blandit, elit orci pellentesque orci, ac pretium lacus tortor
                            ut arcu. Sed id nisi in augue sodales lobortis. Mauris
                            aliquam urna non velit facilisis, id blandit mi dignissim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce vel porttitor mi. </p>
                    </article>
                    <LandingCard bottom={'5%'} left={'5%'} imageUrl={Rectangle4}>
                        <img className={'background'} src={Rectangle7} alt={'Studying'}/>
                        <div className={'overlay'}>
                            <h2>Studying</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </LandingCard>
                    <LandingCard bottom={'15%'} left={'30%'} imageUrl={Rectangle5}>
                        <img className={'background'} src={Rectangle6} alt={'Chatting'}/>
                        <div className={'overlay'}>
                            <h2>Chatting</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </LandingCard>
                    <LandingCard top={'45%'} right={'30%'} imageUrl={Rectangle6}>
                        <img className={'background'} src={Rectangle5} alt={'Planning'}/>
                        <div className={'overlay'}>
                            <h2>Planning</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </LandingCard>
                    <LandingCard top={'35%'} right={'5%'} imageUrl={Rectangle7}>
                        <img className={'background'} src={Rectangle4} alt={'Teamwork'}/>
                        <div className={'overlay'}>
                            <h2>Teamwork</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </LandingCard>
                </Container>
            </StyledLanding>
        )
    }
}
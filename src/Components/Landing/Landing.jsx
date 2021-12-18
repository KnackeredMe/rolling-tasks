import React, {Component} from 'react';
import {StyledLanding} from "./Landing.styled";
import LandingCard from "./LandingCard/LandingCard";
import Rectangle4 from "../../Assets/Images/Landing/Rectangle4.jpg"
import Rectangle5 from "../../Assets/Images/Landing/Rectangle5.jpg"
import Rectangle6 from "../../Assets/Images/Landing/Rectangle6.jpg"
import Rectangle7 from "../../Assets/Images/Landing/Rectangle7.jpg"
import {Container} from "../Container/Container";

export class Landing extends Component {
    render() {
        return (
            <StyledLanding>
                <Container>
                    <article className={'landingArticle'}>
                        <h1 className={'landingHeading'}>What is RollingTasks?</h1>
                        <p className={'landingText'}>Rolling Tasks was developed for comfortable, logical and customizable process of working both in team, and for personal aims.
                            You can use it for self time-management, planning your tasks for future, that may come in handy in studying.
                            Also, it is useful for cooperation with teammates, so you can see the global picture of current work, track progress of solving issues,
                            define and assign teammates, that would be responsible for it and designate the priorities.
                            Finally, you can discuss necessary topics with your teammates “in place” using embedded chat,
                            so you can roll under your own workflow.Still do not use application?
                        </p>
                        <p className={'landingText'}>
                            Type Sign up and become a Roller!
                        </p>
                    </article>
                    <LandingCard bottom={'5%'} left={'5%'} imageUrl={Rectangle4}>
                        <div className={'overlay'}>
                            <h2>Studying</h2>
                            <p>Organize your education.</p>
                        </div>
                    </LandingCard>
                    <LandingCard bottom={'15%'} left={'30%'} imageUrl={Rectangle5}>
                        <div className={'overlay'}>
                            <h2>Chatting</h2>
                            <p>Discuss necessary issues in related chats with colleagues.</p>
                        </div>
                    </LandingCard>
                    <LandingCard top={'45%'} right={'30%'} imageUrl={Rectangle6}>
                        <div className={'overlay'}>
                            <h2>Planning</h2>
                            <p>Plan your tasks and track progress of solving.</p>
                        </div>
                    </LandingCard>
                    <LandingCard top={'35%'} right={'5%'} imageUrl={Rectangle7}>
                        <div className={'overlay'}>
                            <h2>Teamwork</h2>
                            <p>Cooperate with teammates.</p>
                        </div>
                    </LandingCard>
                </Container>
            </StyledLanding>
        )
    }
}

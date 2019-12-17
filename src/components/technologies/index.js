import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import {
    FaBootstrap, FaHtml5, FaReact, FaNode, FaCss3Alt, FaGithub, FaGitlab
} from 'react-icons/fa';
import { DiJavascript, DiMongodb, DiJqueryLogo, DiMysql, DiMaterializecss, DiFirebase, DiHeroku, DiTrello } from 'react-icons/di'
import ScrollAnimation from 'react-animate-on-scroll';

import './tech.css';


const Tech = () => {
    return (
        <div className="tech techBg">
            <Container>
                <div className="techText">
                    <Row>
                        <Col className="justify-content-center">
                            <div className='techIntro'>Here are some of the technical skills I have acquired</div>
                        </Col>
                    </Row>
                    <Row className="rowPadding justify-content-center skillSet1">
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' >
                                <h1><FaHtml5 className="skills" /></h1>
                                HTML
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={400}>
                                <h1><FaCss3Alt className="skills" /></h1>
                                CSS
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={1100}>
                                <h1><DiJavascript className="skills" /></h1>
                                JavaScript
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={700}>
                                <h1><DiJqueryLogo className="skills" /></h1>
                                JQuery
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={800}>
                                <h1><FaReact className="skills" /></h1>
                                ReactJs
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={1400}>
                                <h1><FaNode className="skills" /></h1>
                                NodeJs
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={1200}>
                                <h1><DiMongodb className="skills" /></h1>
                                MongoDB/Mongoose
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={500}>
                                <h1><DiMysql className="skills" /></h1>
                                MySQL/Sequelize
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={800}>
                                <h1><DiFirebase className="skills" /></h1>
                                FirebaseDB
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={1000}>
                                <h1><DiMaterializecss className="skills" /></h1>
                                Materialize
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={100}>
                                <h1><FaBootstrap className="skills" /></h1>
                                BootStrap
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={200}>
                                <h1><FaGithub className="skills" /></h1>
                                Github
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={1300}>
                                <h1><FaGitlab className="skills" /></h1>
                                GitLab
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={600}>
                                <h1><DiHeroku className="skills" /></h1>
                                Heroku
                        </ScrollAnimation>
                        </Col>
                        <Col xs="auto">
                            <ScrollAnimation animateIn='fadeIn' delay={900}>
                                <h1><DiTrello className="skills" /></h1>
                                Trello
                        </ScrollAnimation>
                        </Col>
                    </Row>
                </div>
                <ScrollAnimation animateIn='fadeIn' delay={150}>
                    <Row className='otherSkills'>
                        <Col xs='3' className='othersTitle'>
                            Other Skills
                        </Col>
                        <Col xs='9' className='justify-content-center skillSet2'>
                            APIs - Postman - MVC - Handlebars - ES6 - Creative problem solving - Strategic planning -
                            High WPM (words per minute) - Organization - Teamwork - Microsoft Office - Adaptability - Puzzle Solving - Google
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
        </div>
    )
}

export default Tech;

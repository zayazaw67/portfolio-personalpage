import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub, FaLinkedin, FaFileAlt, } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import './intro.css';

class Intro extends React.Component {
    resumeRedirect = () => {
        window.open('https://docs.google.com/document/d/1ZbmpnjxuOtTjLDIjIAWel7grny02TY848Bf948hoE7c/edit?usp=sharing');
    };
    gitHubRedirect = () => {
        window.open('https://github.com/zayazaw67');
    };
    linkedInRedirect = () => {
        window.open('https://www.linkedin.com/in/zaya-zaw-2b4462198/');
    };
    mailTo = () => {
        window.location.href = 'mailto:zayazaw67@gmail.com'
    }

    render() {
        return (
            <div className="intro">
                <Row>
                    <Col md="6">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <h1 className="display-3"> &lt;Zaya Zaw></h1>
                        </ScrollAnimation>
                        <hr className="hr1" />
                        <ScrollAnimation delay={500} animateIn='fadeIn' animateOnce={true}>
                            <p>My name is Zaya. I'm a learning web developer with a passion for electronics and technology.</p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={750} animateIn='fadeIn' animateOnce={true}>
                            <p>Feel free to browse some of&nbsp;
                            <Link className="navContent" to='portfolio' duration={1400} smooth={true}>
                                    <span className='portfolioRedirect'>
                                       my work
                                </span>.
                            </Link>
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1000} animateIn='fadeIn' animateOnce={true}>
                            <p>Or you can read more&nbsp;
                            <Link className="navContent" to='bio' duration={1000}  smooth={true}>
                                    <span className='bioRedirect'>
                                    about me
                                </span>.
                            </Link>
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1250} animateIn='fadeIn' animateOnce={true}>
                            <p>If you like my work, feel free to check out my <span className='resumeLink' onClick={this.resumeRedirect}>resume</span>.</p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1700} animateIn='fadeIn' animateOnce={true}>
                            <hr className="hr2" />
                            <h2>
                                <FaGithub className="icon" onClick={this.gitHubRedirect} />
                                <FaLinkedin className="icon" onClick={this.linkedInRedirect} />
                                <FaFileAlt className="icon" onClick={this.resumeRedirect} />
                                <MdMailOutline className="icon" onClick={this.mailTo} />
                            </h2>
                        </ScrollAnimation>
                    </Col>

                    <Col md="6">
                        <div className='pic'>
                            <ScrollAnimation delay={3000} duration={4}
                                animateIn='hinge'
                                initiallyVisible={true}
                                animateOnce={true}>
                                <img className="cartoonImage" src="https://i.imgur.com/qtsVq5w.png" width="50%" alt="Cartoon of programmer"></img>
                            </ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="quote">
                            "Let me tell you something you already know. The world ain't all sunshine and rainbows.
                            It's a very mean and nasty place, and I don't care how tough you are,
                            it will beat you to your knees and keep you there permanently if you let it.
                            You, me, or nobody is gonna hit as hard as life. But it ain't about how hard you hit.
                            It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward.
                            That's how winning is done! Now if you know what you're worth, then go out and get what you're worth,
                            but you gotta be willing to take the hits, and not pointing fingers saying you ain't where you wanna be because of him,
                            or her, or anybody. Cowards do that and that ain't you. You're better than that!"
                        </Col>
                    </Row>
                </Container>
                <Row className="justify-content-center">
                    <Col className="quote">
                        Rocky Balboa
                        </Col>
                </Row>
            </div>
        );
    }
};

export default Intro;
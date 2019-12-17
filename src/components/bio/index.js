import React from 'react';
import { Media, Container, Row, Col, Button } from 'reactstrap';
import Pic from '../../images/pic.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import resume from '../../images/resume.pdf';
import { FaDownload } from 'react-icons/fa';
import './bio.css';


const Bio = () => {

  return (
    <div className="bio">
      <Container>
        <Row>
          <Col md='3'>
            <div>
              <ScrollAnimation animateIn='wobble'
                initiallyVisible={true}>
                <Media className="picture" object src={Pic} alt="Profile picture" />
              </ScrollAnimation>
            </div>
          </Col>
          <Col md='9' className="details">
            <ScrollAnimation delay={500} animateIn='tada' initiallyVisible={true}>
              <Row><strong><u>Full-Stack Web Developer, Competitive Gamer, Telephile</u></strong></Row>
              <Row className="about">
                Before diving into web development, I had an interest in how things work. This stemmed from video games.
                I always wanted to figure out why something happens when you did something, and now I try to think in code for every game I play.
                Technology has always been in my life and is extremely important to me. When it comes to tech and electronics, I'm highly
                versatile, well-read, and motivated to incorporating new things into my life.
                  <p>I started just like everyone else, knowing little to nothing.
                I didn't like the idea of being bad at something I enjoyed, and so I seek to continuously improve myself every day, whether it is
                  through code, improving my communication ability, or even just getting better at video games.</p>
              </Row>
            </ScrollAnimation>
            <Row>
              <Col md='3' className="contactInfo">
                <div>
                  <span><strong><u>Contact Info</u></strong></span>
                </div>
                <div>Zaya Zaw</div>
                <div>Chicago, IL</div>
                <div>zayazaw67@gmail.com</div>
                <div>312.866.1093</div>
              </Col>
              <Col md='9' className='d-flex justify-content-end'>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <Button className='resumeButton'><FaDownload /> Download Resume</Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div >
  );
};

export default Bio;
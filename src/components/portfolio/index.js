import React, { Component } from 'react'
import {
    Container, Row, Button, Modal, ModalBody, ModalFooter, Col,
    Card, CardImg, CardBody, CardTitle, CardDeck, CardText, 
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import budgetTracker from '../../images/budgettracker.png';
import fraigslist from '../../images/fraigslist.png';
import bamazon from '../../images/bamazon.png';
import trackerPreview from '../../images/trackerpreview.gif';
import fraigsPreview from '../../images/fraigspreview.gif';
import bamazonPreview from '../../images/bamazonpreview.gif';
import clickyPreview from '../../images/clickpreview.gif';
import clickGame from '../../images/clickgame.png';


import './portfolio.css'

class Portfolio extends Component {
    state = {
        bamazonModal: false,
        budgetTrackerModal: false,
        fraigslistModal: false,
        clickyModal: false,
    }

    toggleBamazonModal = () => {
        this.setState({
            bamazonModal: !this.state.bamazonModal
        })
    };

    toggleBudgetTrackerModal = () => {
        this.setState({
            budgetTrackerModal: !this.state.budgetTrackerModal
        })
    };

    toggleFraigslistModal = () => {
        this.setState({
            fraigslistModal: !this.state.fraigslistModal
        })
    };

    toggleClickyModal = () => {
        this.setState({
            clickyModal: !this.state.clickyModal
        })
    };

    budgetRepoRedirect = () => {
        window.open('https://github.com/BudgetManager1/BudgetManager');
    };

    fraigsRepoRedirect = () => {
        window.open('https://github.com/Project3-Group/Fraigslist');
    };

    bamazonRepoRedirect = () => {
        window.open('https://github.com/zayazaw67/bAmazon');
    };

    budgetLiveSite = () => {
        window.open('https://safe-depths-87257.herokuapp.com/');
    };

    fraigsLiveSite = () => {
        window.open('https://limitless-dawn-67554.herokuapp.com/');
    };

    clickyLiveSite = () => {
        window.open('https://zayazaw67.github.io/Clicky-React//');
    };

    clickyRepoRedirect = () => {
        window.open('https://github.com/zayazaw67/Clicky-React');
    };

    render() {
        return (
            <div className="background portfolio">
                <Container>
                    <Row>
                        <Col className="justify-content-center">
                            <div className='portfolioTitle'>Sample of some of my work</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center portfolioItems">
                        <CardDeck className="deck justify-content-center">

                            <ScrollAnimation delay={1000} duration="1" animateIn='bounceInLeft' animateOut='bounceOutLeft'>
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="cards">
                                    <CardTitle><h3>Budget Tracker</h3></CardTitle>
                                    <CardImg className="images image-1" top width="100%" src={budgetTracker} alt="Preview of Budget Tracker" onClick={this.toggleBudgetTrackerModal} />
                                    <CardBody>
                                        <CardText>Built with JavaScript, MySQL, handlebars, JQuery, and NodeJs.
                                            <p>Styled with Materialize.</p>
                                        </CardText>
                                        <Button color="secondary" onClick={this.budgetRepoRedirect}>GitHub Repo</Button>
                                    </CardBody>
                                </Card>
                            </ScrollAnimation>

                            <ScrollAnimation duration="1" animateIn='bounceInLeft' animateOut='bounceOutLeft'>
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="cards">
                                    <CardTitle><h3>FraigsList</h3></CardTitle>
                                    <CardImg className="images image-2" top width="100%" src={fraigslist} alt="Preview of Fraigslist" onClick={this.toggleFraigslistModal} />
                                    <CardBody>
                                        <CardText>Built with JavaScript, the full MERN Stack (MongoDB, Express, React, Node).
                                            <p>Styled with Reactstrap.</p>
                                        </CardText>
                                        <Button color="secondary" onClick={this.fraigsRepoRedirect}>GitHub Repo</Button>
                                    </CardBody>
                                </Card>
                            </ScrollAnimation>

                            <ScrollAnimation delay={500} duration="1" animateIn='bounceInRight' animateOut='bounceOutRight'>
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="cards">
                                    <CardTitle><h3>Bamazon</h3></CardTitle>
                                    <CardImg className="images image-3" top width="100%" src={bamazon} alt="Preview of Bamazon" onClick={this.toggleBamazonModal} />
                                    <CardBody>
                                        <CardText>Built with JavaScript, Node, JQuery, and MySQL.
                                        </CardText>
                                        <Button color="secondary" onClick={this.bamazonRepoRedirect}>GitHub Repo</Button>
                                    </CardBody>
                                </Card>
                            </ScrollAnimation>

                            <ScrollAnimation delay={1500} duration="1" animateIn='bounceInRight' animateOut='bounceOutRight'>
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="cards">
                                    <CardTitle><h3>Clicky Game</h3></CardTitle>
                                    <CardImg className="images image-3" top width="100%" src={clickGame} alt="Preview of Bamazon" onClick={this.toggleClickyModal} />
                                    <CardBody>
                                        <CardText>Built with JavaScript, and React.
                                            <p>Styled with Boostrap.</p>
                                        </CardText>
                                        <Button color="secondary" onClick={this.clickyRepoRedirect}>GitHub Repo</Button>
                                    </CardBody>
                                </Card>
                            </ScrollAnimation>
                        </CardDeck>
                    </Row>
                    <Row>
                        <Col className="additionals">
                            If you liked any of these projects and want to see how I built up the skills to learn these, please consider visiting my&nbsp;
                            <a href="https://github.com/zayazaw67" className='githubRedirect' target="_blank" rel="noopener noreferrer">Github</a>!
                        </Col>
                    </Row>
                </Container>

                <div className="modals">
                    <div>
                        <Modal size="lg" id="budgetModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleBudgetTrackerModal} isOpen={this.state.budgetTrackerModal} style={{ opacity: 1 }}>
                            <img className="gifs gif-1" src={trackerPreview} alt="Preview of budget tracker"></img>
                            <ModalBody body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Container>
                                    <Row><strong>Budget Tracker</strong></Row>
                                    <Row>This is a simple to use app to help you manage where you're spending your money. Simply log in to view your personal data and check out where your money is going.</Row>
                                    <Row>If you just want to check out the site, use our dummy account.</Row>
                                    <Row>email: test@test.com || password: test</Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Button className="justify-content-center" color="primary" onClick={this.budgetLiveSite}>Live Site</Button>
                                <Button color="primary" onClick={this.toggleBudgetTrackerModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Modal size='lg' id="fraigsModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleFraigslistModal} isOpen={this.state.fraigslistModal} style={{ opacity: 1 }}>
                            <img className="gifs gif-1" src={fraigsPreview} alt="Preview of budget tracker"></img>
                            <ModalBody body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Container>
                                    <Row><strong>FraigsList</strong></Row>
                                    <Row>Sandbox e-commerce application. In this, you can browse people's items for sale. If you want, you can further your experience by creating an account.</Row>
                                    <Row>After creating an account, you can purchase other people's items, or add your own. When you have items added you can then edit your items.</Row>
                                    <Row>If someone buys your items, your total earned will dynamically update with how much you made.</Row>
                                    <Row>If you just want to check out the site, use our dummy account.</Row>
                                    <Row>email: test || password: test</Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Button className="justify-content-center" color="primary" onClick={this.fraigsLiveSite}>Live Site</Button>
                                <Button color="primary" onClick={this.toggleFraigslistModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Modal size="lg" id="bamazonModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleBamazonModal} isOpen={this.state.bamazonModal} style={{ opacity: 1 }}>
                            <img className="gifs gif-2" src={bamazonPreview} alt="Preview of bamazon"></img>
                            <ModalBody body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>

                                <Container>
                                    <Row><strong>Bamazon</strong></Row>
                                    <Row>Two Part back-end application. You can either demo as a store manager, or customer.</Row>
                                    <Row>As a customer, you can view, and purchase, items that are in stock.</Row>
                                    <Row>As a manager, you have the ability to view items that are low stock (less than 5), add a new item, restock an item, and view items for sale.</Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Button color="primary" onClick={this.toggleBamazonModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Modal size='lg' id="clickyModal" className="modals modal-dialog modal-dialog-centered" toggle={this.toggleClickyModal} isOpen={this.state.clickyModal} style={{ opacity: 1 }}>
                            <img className="gifs gif-3" src={clickyPreview} alt="Preview of clicky game"></img>
                            <ModalBody body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>

                                <Container>
                                    <Row><strong>Clicky Memory Game</strong></Row>
                                    <Row>Simple one page React game.</Row>
                                    <Row>Click on images that you haven't clicked on previously to earn a point. If you click a duplicate image, it'll will reset the game, and set a new high score,
                                        if it is higher than the previous one.</Row>
                                    <Row>To play just go to the live site, and start clicking images!</Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter body inverse style={{ backgroundColor: '#333', borderColor: 'white' }}>
                                <Button className="justify-content-center" color="primary" onClick={this.clickyLiveSite}>Live Site</Button>
                                <Button color="primary" onClick={this.toggleClickyModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;

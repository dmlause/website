import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane, faClipboardCheck, faRss} from '@fortawesome/free-solid-svg-icons';
import Socials from '../layout/Socials';
import {Col, Button, Card} from 'react-bootstrap';
import {withRouter} from "react-router-dom";

const About = props => {
    document.title = "Derek Lause | About";

    return (
        <>
            <Col md={{span: 6, offset: 3}} className="about-page">
                <section>
                    <Col md={{span: 6, offset: 3}}>
                        <Card border="primary">
                            <Card.Body>
                                <Card.Img variant="top" src={require("../../assets/images/headshot.png")} />
                                <Card.Text>
                                    <p>Hello, my name is Derek Lause, nice to meet you. I teach, build software, and improve.</p>
                                    <Col md="12">
                                        <Button className="about-button" href="/portfolio" title="View Derek's portfolio">
                                            View Portfolio <FontAwesomeIcon icon={faClipboardCheck}/>
                                        </Button>
                                    </Col>
                                    <Col md="12">
                                        <Button className="about-button" href="https://dlause.blogspot.com" title="View Derek's content">
                                            View Content <FontAwesomeIcon icon={faRss}/>
                                        </Button>
                                    </Col>
                                    <Col md="12">
                                        <Button className="about-button" href="/contact" title="Contact Derek">
                                            Contact Derek <FontAwesomeIcon icon={faPaperPlane}/>
                                        </Button>
                                    </Col>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </section>
                <section>
                    <h2>A little bit more about me...</h2>
                    <Col md={{span: 6, offset: 3}}>
                        <Card border="primary">
                            <Card.Body>
                                <Card.Img variant="top" src={require("../../assets/images/derek_tahoe.jpg")}/>
                                <Card.Text>
                                    <p className="mb-2 text-muted">Cave Rock - Lake Tahoe</p>
                                    <p>This picture has been one that has stuck with me over the years because it describes me well.
                                       I enjoy exploring new heights in challenging ways, whether it be physical, professional, emotional, or spiritual.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </section>
                <section>
                    <Col md={{span: 6, offset: 3}}>
                        <Card border="primary">
                            <Card.Body>
                                <Card.Img variant="top" src={require("../../assets/images/derek_msu.jpg")}/>
                                <Card.Text>

                                    <p className="mb-2 text-muted">Bear Statue - MSU Campus</p>
                                    <p>I graduated from Missouri State University after completing my Bachelor's of Science in Computer Science in the fall of 2017,
                                    and I am currently pursuing my Master's of Business Administration from Missouri State University
                                    I also graduated from East Central College with an Associate's of Arts in Liberal Studies in May 2016.
                                    Continuous improvement and learning is core to my philosophy that has driven my iterative progress.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </section>
                <section>
                    <Socials/>
                </section>
            </Col>
        </>
    );
}


export default withRouter(About);
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import Socials from '../layout/Socials';
import {Row, Col, Button} from 'react-bootstrap';
import {withRouter} from "react-router-dom";

const About = props => {
    document.title = "Derek Lause | About";

    return (
        <>
            <Row className="about-page">
                <Col md={{span: 6, offset: 3}}>
                    <div>
                        <h2>Hi, I'm Derek Lause.</h2>
                        <p>I am a self-motivated full stack software engineer, as well as a leader and mentor.</p>
                        <p>You're welcome to see my skillset and accomplishments on the <a href='/portfolio'
                                                                                           className="about-link">portfolio
                            page</a>.</p>
                        <p>Check out my <a href='https://dlause.blogspot.com' className="about-link">blog
                            content</a> about everything technology</p>
                        <Button className="about-button" href="/contact" title="Contact Derek Lause">
                            Contact Derek <FontAwesomeIcon icon={faPaperPlane}/>
                        </Button>
                    </div>
                    <Socials/>
                </Col>
            </Row>
        </>
    );
}


export default withRouter(About);
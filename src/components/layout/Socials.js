import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Row, Col} from 'react-bootstrap';

const Socials = () => {
    return (
        <>
            <div className="social-container">
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        Follow me!
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        <a href="https://twitter.com/dmlause"><FontAwesomeIcon icon={faTwitter}  title="Derek Lause's Twitter"/></a>
                        <a href="https://github.com/dmlause"><FontAwesomeIcon icon={faGithub}  title="Derek Lause's Github"/></a>
                        <a href="https://www.linkedin.com/in/dereklause"><FontAwesomeIcon icon={faLinkedin}  title="Derek Lause's LinkedIn"/></a>
                        <a href="https://www.youtube.com/channel/UCNoAX-XqNBMlP7CkEYgewVg"><FontAwesomeIcon icon={faYoutube}  title="Derek Lause's Youtube"/></a>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Socials;
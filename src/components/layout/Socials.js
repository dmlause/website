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
                        Follow me
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        <FontAwesomeIcon icon={faTwitter} href="" title="Derek Lause's Twitter"/>
                        <FontAwesomeIcon icon={faGithub} href="" title="Derek Lause's Github"/>
                        <FontAwesomeIcon icon={faLinkedin} href="" title="Derek Lause's LinkedIn"/>
                        <FontAwesomeIcon icon={faYoutube} href="" title="Derek Lause's Youtube"/>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Socials;
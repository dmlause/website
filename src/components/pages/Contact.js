import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {withRouter} from 'react-router-dom';
import Socials from '../layout/Socials';
import {useDispatch, useSelector} from "react-redux";
import {sendEmail, updateProperty} from "../../actions/contactActions/contactActions";
import {Row, Col, Form, Button} from 'react-bootstrap';
import validator from 'validator';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Contact = props => {
    document.title = "Derek Lause | Contact";

    const reCaptchaRef = React.createRef();
    const dispatch = useDispatch();
    const name = useSelector(state => state.contact.name);
    const email = useSelector(state => state.contact.email);
    const message = useSelector(state => state.contact.message);
    const value = useSelector(state => state.contact.value);
    const expired = useSelector(state => state.contact.expired);

    return (
        <>
            <Row className="contact-page">
                <Col md={{span: 6, offset: 3}}>
                    <Form className="contact-form">
                        <Form.Group as={Row}>
                            <Form.Label column sm={{span: 2}}>Name</Form.Label>
                            <Col sm={{span: 8}}>
                                <Form.Control type="text" name="name" value={name} length={10}
                                              onChange={(e) => dispatch(updateProperty(e.target.name, e.target.value))}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{span: 2}}>Email</Form.Label>
                            <Col sm={{span: 8}}>
                                <Form.Control type="text" name="email" value={email}
                                              onChange={(e) => dispatch(updateProperty(e.target.name, e.target.value))}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{span: 2}}>Message</Form.Label>
                            <Col sm={{span: 8}}>
                                <Form.Control as="textarea" placeholder="Message here..." rows="3" name="message" value={message}
                                              onChange={(e) => dispatch(updateProperty(e.target.name, e.target.value))}/>
                            </Col>
                        </Form.Group>
                    </Form>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        style={{display: "inline-block"}}
                        onExpired={() => {
                            dispatch(updateProperty('expired', true));
                            dispatch(updateProperty('value', ''));
                        }}
                        ref={reCaptchaRef}
                        onChange={value => {
                            dispatch(updateProperty('expired', false));
                            dispatch(updateProperty('value', value));
                        }}/>
                    <br/>
                    <Button className="contact-button"
                            disabled={expired || !value}
                            onClick={() => dispatch(sendEmail())} title="Contact Derek Lause">
                        Send Message <FontAwesomeIcon icon={faPaperPlane}/>
                    </Button>
                    <Socials/>
                </Col>
            </Row>
        </>
    );
};

export default withRouter(Contact);
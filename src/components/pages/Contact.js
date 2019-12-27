import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {Row, Col, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            message: '',
            value: '',
            isLoading: false,
            isLocked: false,
            expired: false,
        };
        this._reCaptchaRef = React.createRef();
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleExpire = this.handleExpire.bind(this);
        this.handleSendingEmail = this.handleSendingEmail.bind(this);
    }

    handleMessage(event) {
        let fieldValue = event.target.value;
        this.setState({message: fieldValue});
    }

    handleSubject(event) {
        let fieldValue = event.target.value;
        this.setState({subject: fieldValue});
    }

    handleChange(value) {
        this.setState({value});
        this.setState({expired: false});
    }

    handleExpire() {
        this.setState({value: ''});
        this.setState({expired: true});
    }

    handleSendingEmail() {
        this.setState({isLoading: true});
        fetch(process.env.REACT_APP_SENDEMAIL_API_KEY + '/sendEmail?subject=' + this.state.subject + "&message=" + this.state.message, {
            headers: {
                'x-api-key': process.env.REACT_APP_SENDEMAIL_API_KEY,
            }
        })
            .then(res => {
                this.setState({isLoading: false});
                if (res.status !== 200) {
                    throw res.status;
                }
                toast("Email sent successfully!", {
                    type: "success",
                    position: "top-center"
                });
                this.setState({isLocked: true});
            })
            .catch(err => {
                this.setState({isLoading: false});
                toast("Email failed to send.", {
                    type: "error",
                    position: "top-center"
                });
            })
    }

    render() {
        return (
            <Row className="contact-row">
                <Col xs={12} md={6} mdOffset={3}>
                    <ToastContainer/>
                    <div className="contact-social-media">
                        Follow me! <br/>
                        <a href="https://linkedin.com/in/dereklause/"><i title="LinkedIn"
                                                                         className="fa fa-2x fa-linkedin"/></a> &emsp; &nbsp;
                        <a href="https://github.com/dmlause"><i className="fa fa-2x fa-github"
                                                                title="Github"/></a> &emsp; &nbsp;
                        <a href="https://twitter.com/dmlause"><i className="fa fa-2x fa-twitter"
                                                                 title="Twitter"/></a> &emsp; &nbsp;
                        <a href="https://facebook.com/dmlause"><i className="fa fa-2x fa-facebook"
                                                                  title="Facebook"/></a> &emsp; &nbsp;
                        <a href="https://youtube.com/channel/UCNoAX-XqNBMlP7CkEYgewVg"><i
                            className="fa fa-2x fa-youtube-play" title="Youtube"/></a>
                    </div>
                    <div className="contact-container">
                        <FormGroup>
                            <FormLabel>
                                Subject
                            </FormLabel>
                            <FormControl
                                id="contact-subject"
                                type="text"
                                maxLength={100}
                                label="Subject"
                                placeholder="Enter subject here"
                                onChange={this.handleSubject}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Message
                            </FormLabel>
                            <FormControl
                                id="contact-message"
                                componentClass="textarea"
                                maxLength={2000}
                                label="Message"
                                placeholder="Enter message here"
                                onChange={this.handleMessage}
                            />
                        </FormGroup>
                        <div>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                style={{display: "inline-block"}}
                                onExpired={this.handleExpire}
                                ref={this._reCaptchaRef}
                                onChange={this.handleChange}
                                asyncScriptOnLoad={this.asyncScriptOnLoad}
                            />
                        </div>
                        <Button
                            className="email-button"
                            bsStyle="primary"
                            onClick={this.handleSendingEmail}
                            disabled={this.state.message === '' || this.state.subject === '' || this.state.isLoading || this.state.isLocked || this.state.expired || this.state.isLocked}>
                            {this.state.isLoading ? "Loading..." : this.state.isLocked ? "Email Sent" : "Send Email"}
                        </Button>
                    </div>
                </Col>
            </Row>
        );
    };
}

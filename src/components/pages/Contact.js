import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {ToastContainer} from 'react-toastify';
import {withRouter} from 'react-router-dom';
import Socials from '../layout/Socials';
import {connect, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {updateProperty} from "../../actions/contactActions/contactActions";
import {Row, Col} from 'react-bootstrap';

const Contact = (props) => {
    const reCaptchaRef = React.createRef();
    const dispatch = useDispatch();
    const message = useSelector(state => state.contact.message);
    // const firstName = useSelector(state => state.contact.firstName);
    // const firstName = useSelector(state => state.contact.firstName);


    console.log(props);
    return (
        <>
            <Row className="contact-page">
                <Col md={{span: 6, offset: 3}}>
                    <ToastContainer/>
                    <Socials/>
                    <div>
                        {message}
                        <input type="text" onChange={(e) => dispatch(updateProperty('message', e.target.value))}/>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            style={{display: "inline-block"}}
                            onExpired={() => dispatch(updateProperty('expired', true))}
                            ref={reCaptchaRef}
                            onChange={(value) => dispatch(updateProperty('value', value))}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         firstName: state.contact.firstName,
//         lastName: state.contact.lastName,
//         email: state.contact.email,
//         message: state.contact.message,
//         value: state.contact.value,
//         expired: state.contact.expired
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         contactActions: bindActionCreators(contactActions, dispatch),
//     };
// };

export default withRouter(Contact);
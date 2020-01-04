import * as types from '../actionTypes';
import {ajaxCallError, beginAjaxCall, endAjaxCall} from "../ajaxStatusActions";
import {authorizedGet} from "../../utils/ajaxHelpers";
import {toast} from "react-toastify";

export function updateProperty(property, value) {
    return {
        type: types.UPDATE_CONTACT_PAGE,
        contact: {
            [property]: value
        }
    };
}



export function clearContact() {
    return {
        type: types.CLEAR_CONTACT_PAGE
    }
}

export function sendEmail(email) {

    console.log(email);

    // const url = window.API_URL = + '/api/sendEmail?param=' + email.param;
    // return function (dispatch) {
    //     dispatch(beginAjaxCall());
    //     return authorizedGet(url)
    //         .then(response => {
    //             const json = response.json();
    //             dispatch(endAjaxCall());
    //             return json;
    //         })
    //         .catch(error => {
    //             dispatch(ajaxCallError(error));
    //             return toast.error('Failed to send email');
    //         })
    // }
}

/**
 * Code from old component for reference
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
 */

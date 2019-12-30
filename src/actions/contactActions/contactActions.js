import * as types from '../actionTypes';
import {ajaxCallError, beginAjaxCall, endAjaxCall} from "../ajaxStatusActions";
import {authorizedGet} from "../../utils/ajaxHelpers";
import {toast} from "react-toastify";

export function updateProperty(property, value) {
    return {
        type: types.UPDATE_CONTACT_PAGE,
        payload: {
            [property]: value
        }
    };
}

export function sendEmail(email) {

    const url = window.API_URL = + '/api/sendEmail?param=' + email.param;
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return authorizedGet(url)
            .then(json => {
                dispatch(endAjaxCall());
                return json;
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                return toast.error('Failed to send email');
            })
    }
}
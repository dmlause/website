import {BEGIN_AJAX_CALL, END_AJAX_CALL} from "./actionTypes";

export function beginAjaxCall() {
    return {
        type: BEGIN_AJAX_CALL
    };
}

export function endAjaxCall() {
    return {
        type: END_AJAX_CALL
    };
}

export function ajaxCallError(error) {
    return function (dispatch) {
        if (error === 401) {
            dispatch(endAjaxCall());
            console.log("401: Unauthorized");
        }
    }
}
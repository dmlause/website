import initialState from "./initialState";
import {BEGIN_AJAX_CALL, END_AJAX_CALL} from "../actions/actionTypes";

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

    switch(action.type) {
        case BEGIN_AJAX_CALL:
            return state++;

        case END_AJAX_CALL:
            return state > 0 ? state-- : 0;

        default:
            return state;
    }

}
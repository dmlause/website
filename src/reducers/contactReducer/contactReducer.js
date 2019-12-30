import {UPDATE_CONTACT_PAGE} from "../../actions/actionTypes";
import initialState from '../initialState';

export default function contactReducer(state = initialState.contact, action) {

    switch(action.type) {
        case UPDATE_CONTACT_PAGE:
            return {...state, contact: action.payload};

        default:
            return state;
    }

}
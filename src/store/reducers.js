import {combineReducers} from "redux";
import * as cnst from '../constants';

function rootReducer(state = cnst.INITIAL_STATE, action = {'type': 'default'}) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({rootReducer});
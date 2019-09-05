import {combineReducers} from "redux";
import * as cnst from '../constants';

function rootReducer(state = cnst.INITIAL_STATE, action = {'type': 'default'}) {
    switch (action.type) {
        case cnst.ERASE:
            let newState = Object.assign({}, state);
            newState.isPrevCalculate = false;
            newState.input = 0;
            newState.formula = 0;
            newState.addDecimal = false;
            return newState;

        case cnst.UPDATE_DISPLAY:
            return Object.assign({}, action.newState);

        default:
            return state;
    }
}

export default combineReducers({rootReducer});
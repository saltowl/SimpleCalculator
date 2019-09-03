import {combineReducers} from "redux";
import * as cnst from '../constants';

function rootReducer(state = cnst.INITIAL_STATE, action = {'type': 'default'}) {
    const newState = Object.assign({}, state);
    newState.isPrevCalculate = false;

    switch (action.type) {
        case cnst.ERASE:
            newState.input = 0;
            newState.formula = 0;
            return newState;

        case cnst.ADD_NUM:
            if (state.input != 0 && !(/[-+*/]$/.test(state.formula)) && !state.isPrevCalculate) {
                newState.input = state.input + action.input;
            } else if (action.input == 0 && state.input == 0) {
                return state;
            } else {
                newState.input = action.input;
                if (newState.formula == 0 || state.isPrevCalculate) {
                    newState.formula = '';
                }
            }
            newState.formula += action.input;
            return newState;

        case cnst.ADD_OP:
            if (state.isPrevCalculate) {
                newState.formula = state.input;
            }
            newState.input = state.input;
            newState.formula += action.input;
            return newState;

        case cnst.SOLVE:
            if (!state.isPrevCalculate) {
                newState.formula = state.formula + '=' + action.result;
                newState.input = action.result;
                newState.isPrevCalculate = true;
                return newState;
            }
            return state;

        default:
            return state;
    }
}

export default combineReducers({rootReducer});
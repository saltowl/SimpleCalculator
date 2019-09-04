import {combineReducers} from "redux";
import * as cnst from '../constants';

function rootReducer(state = cnst.INITIAL_STATE, action = {'type': 'default'}) {
    const newState = Object.assign({}, state);
    newState.isPrevCalculate = false;

    switch (action.type) {
        case cnst.ERASE:
            newState.input = 0;
            newState.formula = 0;
            newState.addDecimal = false;
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
            newState.addDecimal = false;
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
                if (action.result.toString().indexOf('.') === -1) {
                    newState.addDecimal = false;
                }
                newState.isPrevCalculate = true;
                return newState;
            }
            return state;

        case cnst.DECIMAL:
            if (state.addDecimal) {
                return state;
            } else {
                newState.addDecimal = true;
                if (state.isPrevCalculate) {
                    newState.input = '0';
                    newState.formula = '0';
                }
                newState.input += '.';
                newState.formula += '.';
            }
            return newState;

        default:
            return state;
    }
}

export default combineReducers({rootReducer});
import * as cnst from '../constants';

const updateDisplay = (newState) => {
  return {
      type: cnst.UPDATE_DISPLAY,
      newState
  };
};

const erase = () => {
    return {
        type: cnst.ERASE
    };
};

const calculate = (formula) => {
    if (formula.indexOf('=') === -1) {
        let result = new Function('return ' + formula );
        return result();
    }
};

export const mapStateToProps = (state) => {
    return {
        formula: state.rootReducer.formula,
        input: state.rootReducer.input,
        isPrevCalculate: state.rootReducer.isPrevCalculate,
        addDecimal: state.rootReducer.addDecimal
    };
};

export const mergeProps = (state, dispatchProps) => {
    const {formula, input, isPrevCalculate, addDecimal} = state;
    const { dispatch } = dispatchProps;

    let newState = Object.assign({}, state);
    newState.isPrevCalculate = false;

    return {
        formula,
        input,
        isPrevCalculate,
        addDecimal,
        handleClick: (currentInput) => {
            if (state.input !== cnst.DIGIT_LIMIT_MET) {
                if (/[\d]/.test(currentInput)) {
                    // handle num
                    if (state.input.length >= cnst.DIGIT_LIMIT && !(/[-+*/]$/.test(state.formula)) && !state.isPrevCalculate) {
                        newState.input = cnst.DIGIT_LIMIT_MET;
                        setTimeout(() => {
                            dispatch(updateDisplay(state));
                        }, 800, state, dispatch, updateDisplay());
                        dispatch(updateDisplay(newState));
                        return;

                    }
                    if (state.input != 0 && !(/[-+*/]$/.test(state.formula)) && !state.isPrevCalculate) {
                        newState.input = state.input + currentInput;
                    } else if (currentInput == 0 && state.input == 0) {
                        dispatch(updateDisplay(state));
                        return;

                    } else {
                        newState.input = currentInput;
                        if (newState.formula == 0 || state.isPrevCalculate) {
                            newState.formula = '';
                        }
                    }
                    newState.formula += currentInput;
                    dispatch(updateDisplay(newState));


                } else if (/[-+/*]/.test(currentInput)) {
                    // handle op
                    newState.addDecimal = false;
                    if (/[+*-/]$/.test(state.formula) && currentInput !== '-') {
                        newState.formula = state.formula.replace(/[+-/*]+$/, '');
                    }
                    if (state.isPrevCalculate) {
                        newState.formula = state.input;
                    }
                    newState.input = state.input;
                    newState.formula += currentInput;
                    dispatch(updateDisplay(newState));


                } else if (currentInput === 'AC') {
                    // handle erase
                    dispatch(erase());


                } else if (currentInput === '.') {
                    // handle decimal
                    if (state.addDecimal) {
                        dispatch(updateDisplay(state));

                    } else {
                        newState.addDecimal = true;
                        if (state.isPrevCalculate) {
                            newState.input = '0';
                            newState.formula = '0';
                        }
                        newState.input += '.';
                        newState.formula += '.';
                        dispatch(updateDisplay(newState));

                    }
                }
            }
        },
        solve: () => {
            const result = calculate(state.formula);
            if (!state.isPrevCalculate) {
                newState.formula = state.formula + '=' + result;
                newState.input = result;
                if (result.toString().indexOf('.') === -1) {
                    newState.addDecimal = false;
                }
                newState.isPrevCalculate = true;
                dispatch(updateDisplay(newState));

            } else {
                dispatch(updateDisplay(state));

            }
        },
        handleKeyPress: (event) => {
            let str = event.keyCode;
            str += event.shiftKey ? 'shiftKey' : '';
            const key = document.getElementsByClassName(str)[0];
            if (key) {
                key.click();
            }
        }
    };
};
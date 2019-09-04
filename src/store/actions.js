import * as cnst from '../constants';

const addNum = (input) => {
    return {
        type: cnst.ADD_NUM,
        input
    };
};

const addOp = (input) => {
    return {
        type: cnst.ADD_OP,
        input
    };
};

const erase = () => {
    return {
        type: cnst.ERASE
    };
};

const decimal = () => {
    return {
        type: cnst.DECIMAL
    };
};

const solve = (result) => {
    return {
        type: cnst.SOLVE,
        result
    };
};

const calculate = (formula) => {
    let result = new Function('return ' + formula );
    return result();
};

export const mapStateToProps = (state) => {
    return {
        formula: state.rootReducer.formula,
        input: state.rootReducer.input,
        isPrevCalculate: state.rootReducer.isPrevCalculate
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (input) => {
            if (/[\d]/.test(input)) {
                dispatch(addNum(input));
            } else if (/[-+/*]/.test(input)) {
                dispatch(addOp(input));
            } else if (input === 'AC') {
                dispatch(erase());
            } else if (input === '.') {
                dispatch(decimal());
            }
        },
        solve: (formula) => {
            const result = calculate(formula);
            dispatch(solve(result));
        }
    };
};
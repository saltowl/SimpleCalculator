export const INITIAL_STATE = {
    'rootReducer': {
        'formula': 0,
        'input': 0,
        'isPrevCalculate': false,
        'addDecimal': false
    }
};

function CreateKey(name, id, className, keyCode, additionalKey) {
    return {
        name,
        id,
        className,
        keyCode,
        additionalKey
    }
}
export const keyboard = [
    CreateKey('AC', 'clear', 'clear', 8),
    CreateKey('/', 'divide', 'ops', 191),
    CreateKey('*', 'multiply', 'ops', 16, 'shiftKey'),
    CreateKey('7', 'seven', 'nums', 55),
    CreateKey('8', 'eight', 'nums', 56),
    CreateKey('9', 'nine', 'nums', 57),
    CreateKey('-', 'subtract', 'ops', 189),
    CreateKey('4', 'four', 'nums', 52),
    CreateKey('5', 'five', 'nums', 53),
    CreateKey('6', 'six', 'nums', 54),
    CreateKey('+', 'add', 'ops', 187, 'shiftKey'),
    CreateKey('1', 'one', 'nums', 49),
    CreateKey('2', 'two', 'nums', 50),
    CreateKey('3', 'three', 'nums', 51),
    CreateKey('0', 'zero', 'nums', 48),
    CreateKey('.', 'decimal', 'nums', 190),
    CreateKey('=', 'equals', 'equals', 187),
];

export const ERASE = 'ERASE';
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const DIGIT_LIMIT_MET = 'DIGIT LIMIT MET';
export const DIGIT_LIMIT = 18;
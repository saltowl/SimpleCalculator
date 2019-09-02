export const INITIAL_STATE = {
    'rootReducer': {
        'currentString': '',
        'result': 0,
        'input': ''
    }
};

export const primaryOrder = '*/';

function CreateKey(name, id, className) {
    return {
        name,
        id,
        className
    }
}
export const keyboard = [
    CreateKey('AC', 'clear', 'clear'),
    CreateKey('/', 'divide', 'ops'),
    CreateKey('x', 'multiply', 'ops'),
    CreateKey('7', 'seven', 'nums'),
    CreateKey('8', 'eight', 'nums'),
    CreateKey('9', 'nine', 'nums'),
    CreateKey('-', 'subtract', 'ops'),
    CreateKey('4', 'four', 'nums'),
    CreateKey('5', 'five', 'nums'),
    CreateKey('6', 'six', 'nums'),
    CreateKey('+', 'add', 'ops'),
    CreateKey('1', 'one', 'nums'),
    CreateKey('2', 'two', 'nums'),
    CreateKey('3', 'three', 'nums'),
    CreateKey('0', 'zero', 'nums'),
    CreateKey('.', 'decimal', 'nums'),
    CreateKey('=', 'equals', 'equals'),
];

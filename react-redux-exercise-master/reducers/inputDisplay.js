import actionTypes from '../actions/actionTypes';

// Each reducer must define the initial state it works on.
const initialState = {
    value: "ingresa un número",
};

const change = (state, action) => {
    return Object.assign({}, state, {
        value: action.value,
    });
};

const inputDisplay = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.CHANGE_INPUT_DISPLAY:
        return change(state, action);
    default:
        return state;
    }
};


export default inputDisplay;

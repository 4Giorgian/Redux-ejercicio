import actionTypes from '../actions/actionTypes'

const initialState = {
    value: 'option1',
};

const optionChange = (state, action) => {
    return Object.assign({}, state, {
        value: action.value,
    });
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.OPTION_CHANGE:
        return optionChange(state, action);
    default:
        return state;
    }
};

export default exercise;

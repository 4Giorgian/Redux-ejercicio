import actionTypes from '../actions/actionTypes'

const initialState =""






const seteador = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.CLICK_BUTTONCOLOR:
        return action.color;
    default:
        return state;
    }
};

export default seteador;

import actionTypes from '../actions/actionTypes'

const initialState = ['option1']



const acumular= (state, action) => {
  var newState = [...state];
  newState.push(action.value)
  return newState;

};


const acumulador = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.OPTION_CHANGE:
        return acumular(state, action);
    default:
        return state;
    }
};

export default acumulador;

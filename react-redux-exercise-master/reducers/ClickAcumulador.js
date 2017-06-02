import actionTypes from '../actions/actionTypes'

const initialState = {
  nameButton: 0,
};

const acumular= (state, action) => {

  return Object.assign({}, state, {
      nameButton: state.nameButton +1,
  });

};


const clickAcumulador = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.CLICK_BUTTON:
        return acumular(state, action);
    default:
        return state;
    }
};

export default clickAcumulador;

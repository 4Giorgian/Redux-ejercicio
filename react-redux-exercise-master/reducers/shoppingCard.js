import actionTypes from '../actions/actionTypes'  

const initialState = {
  stock: 3,
  disabled: false,
};

const comprar= (state, action) => {

if (state.stock >0) {
  return Object.assign({}, state, {
      stock: state.stock -1,

  });

} else {
  {
    return Object.assign({}, state, {
        disabled: true,
    });
}
}

};

const agregar= (state, action) => {
  return Object.assign({}, state, {
      stock: state.stock +1,
      disabled: false,
      });
}

const shoppingCard = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.COMPRAR_ITEM:
        return comprar(state, action);
    case actionTypes.AGREGAR_ITEM:
        return agregar(state, action);
    default:
        return state;

    }
};

export default shoppingCard;

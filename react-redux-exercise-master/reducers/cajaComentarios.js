import actionTypes from '../actions/actionTypes'

const initialState = "incial"





const cajaComentarios = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.AGREGAR_COMENTARIO:
        return action.comentarioAgregado;

    default:
        return state;

    }
};


export default cajaComentarios;

import actionTypes from '../actions/actionTypes'

const initialState =["ESTADO"]


const agregar = (state, action) => {
  var newComentario = [...state];
  newComentario.push(action.comentarioAgregado)
    return newComentario;

}


const cajaComentarios = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.AGREGAR_COMENTARIO:
        return agregar(state,action);

    default:
        return state;

    }
};


export default cajaComentarios;

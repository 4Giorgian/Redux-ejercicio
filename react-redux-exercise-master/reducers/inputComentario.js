import actionTypes from '../actions/actionTypes'

const initialState = ""


const guardar = (state, action) => {
    return Object.assign({}, state, {
        comentario: action.comentario,
    });
};


const inputComentario = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.GUARDAR_COMENTARIO:
        return guardar(state, action);

    default:
        return state;

    }
};


export default inputComentario;

import { connect } from 'react-redux';
import Comentarios from '../components/Comentarios';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        comentario: state.inputComentario.comentario,
        comentarioAgregado: state.cajaComentarios,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        guardarComentario: (comentario) => {
            dispatch(actions.guardarComentario(comentario));
        },
        agregarComentario: (comentarioAgregado) => {
            dispatch(actions.agregarComentario(comentarioAgregado));
        },
    };
};

const IntelligentComentarios = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Comentarios);

export default IntelligentComentarios;

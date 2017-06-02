import { connect } from 'react-redux';
import Entrenamiento1 from '../components/Entrenamiento1';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        nameButton: state.clickAcumulador.nameButton,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickButton: (nameButton) => {
            dispatch(actions.clickButton(nameButton));
        },
    };
};

const IntelligentEntrenamiento1 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Entrenamiento1);

export default IntelligentEntrenamiento1;

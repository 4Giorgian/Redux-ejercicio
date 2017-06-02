import { connect } from 'react-redux';
import BoxColor from '../components/BoxColor';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        styleBox: state.seteador,
        value: state.changeInput.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => {
            dispatch(actions.changeInput(value));
        },
        clickButtonColor: (value) => {
            dispatch(actions.clickButtonColor(value));
        },
    };
};

const IntelligentBoxcolor = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoxColor);

export default IntelligentBoxcolor;

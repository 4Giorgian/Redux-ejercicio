import { connect } from 'react-redux';
import ExerciseThree from '../components/ExerciseThree';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        value: state.exercise3.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        optionChange: (value) => {
            dispatch(actions.optionChange(value));
        },
    };
};

const IntelligentExerciseThree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseThree);

export default IntelligentExerciseThree;

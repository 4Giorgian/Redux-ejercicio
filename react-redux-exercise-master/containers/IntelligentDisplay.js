import { connect } from 'react-redux';
import Display from '../components/display/index.js';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        segmentA: state.segmentA,
        segmentB: state.segmentB,
        segmentC: state.segmentC,
        segmentD: state.segmentD,
        segmentE: state.segmentE,
        segmentF: state.segmentF,
        segmentG: state.segmentG,
        value: state.inputDisplay.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      changeValue: (value) => {
          dispatch(actions.changeInputDisplay(value));
      },
      clickButtonDisplay: (value) => {
          dispatch(actions.clickButtonDisplay(value));
      },
    };
};

const IntelligentDisplay = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Display);

export default IntelligentDisplay;

import { combineReducers } from 'redux';
import segmentA from './segmentA';
import segmentB from './segmentB';
import segmentC from './segmentC';
import segmentD from './segmentD';
import segmentE from './segmentE';
import segmentF from './segmentF';
import segmentG from './segmentG';
import inputDisplay from './inputDisplay';
// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({
    segmentA,
    segmentB,
    segmentC,
    segmentD,
    segmentE,
    segmentF,
    segmentG,
    inputDisplay,

});

export default rootReducer;

import { combineReducers } from 'redux';
import exercise0 from './exercise0';
import exercise1 from './exercise1';
import exercise2 from './exercise2';
import exercise3 from './exercise3';
import acumulador from './Acumulador';
import clickAcumulador from './ClickAcumulador';
import seteador from './seteador';
import changeInput from './changeInput';
import shoppingCard from './shoppingCard';
import inputComentario from './inputComentario';
import cajaComentarios from './cajaComentarios';
// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({
    exercise0,
    exercise1,
    exercise2,
    exercise3,
    acumulador,
    clickAcumulador,
    seteador,
    changeInput,
    shoppingCard,
    inputComentario,
    cajaComentarios,
});

export default rootReducer;

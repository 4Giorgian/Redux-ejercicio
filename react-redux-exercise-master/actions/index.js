
import actionTypes from './actionTypes';

export const changeInputDisplay = (value) => {
  return{
    type: actionTypes.CHANGE_INPUT_DISPLAY,
    value,
  }
}

export const clickButtonDisplay = (value) => {
  return{
    type: actionTypes.CLICK_BUTTON_DISPLAY,
    value,
  }
}

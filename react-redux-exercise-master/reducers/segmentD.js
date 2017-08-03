import actionTypes from '../actions/actionTypes'

const dataD = {
  top: "196px",
  width: "72px",
  left: "13px",
  borderBottom:"12px solid #000",
  borderLeft: "12px solid transparent",
  borderRight: "12px solid transparent",
  position: "absolute",
  opacity: 0.1
}

export const segmentD = (state = dataD, action) => {

  if (action.type === actionTypes.CLICK_BUTTON_DISPLAY) {
    if(action.value === "0"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "1"){
      return Object.assign({}, state, {
          opacity: 0.1,
      });
    }
    if(action.value === "2"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "3"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "4"){
      return Object.assign({}, state, {
          opacity: 0.1,
      });
    }
    if(action.value === "5"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "6"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "7"){
      return Object.assign({}, state, {
          opacity: 0.1,
      });
    }
    if(action.value === "8"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
    if(action.value === "9"){
      return Object.assign({}, state, {
          opacity: 1,
      });
    }
  }
  return state
}
export default segmentD

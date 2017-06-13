import React, { PropTypes } from 'react'

const BoxColor=({ value, changeValue, styleBox, clickButtonColor }) =>{
    const changeValueFinal = (event) => { changeValue(event.target.value)}
  
  return(
    <div>
        <h1>ENTRENAMIENTO2: BOXCOLOR</h1>
        <i>Button que al hacer click, haga cambiar de color un box.
        Q jale el color de un input donde se escribe el color en texto {styleBox} </i>

        <div style={{backgroundColor:styleBox}} >

        color
        </div>
        <form>
        <input
            type="text"
            value={value}
            onChange={changeValueFinal}
        />
        </form>
        <button onClick={(event) => { clickButtonColor(value)}} >OK</button>
    </div>
)}

BoxColor.propTypes = {
  styleBox: PropTypes.string,
  value: PropTypes.string,
  changeValue: PropTypes.func,
  setearColor: PropTypes.func,
}

export default BoxColor

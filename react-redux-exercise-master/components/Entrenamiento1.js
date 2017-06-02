import React, { PropTypes } from 'react'

const Entrenamiento1 = ({ nameButton, clickButton }) =>{

    const clickAcumuladorFinal = (event) => { clickButton(event.target.nameButton)}

  return(
      <div>
          <h1>ENTRENAMIENTO1</h1>
          <i> 1.- Button, que al hacer click cambia su propio nombre.
          Que el nombre del boton sea la cantidad de veces q lo han clickeado</i>
          <h2>BOTON</h2>
          <div>
            <button onClick={clickAcumuladorFinal} >Click {nameButton}</button>
          </div>
      </div>
)};

Entrenamiento1.propTypes= {
  nameButton: PropTypes.number,
  clickButton: PropTypes.func
}


export default Entrenamiento1;

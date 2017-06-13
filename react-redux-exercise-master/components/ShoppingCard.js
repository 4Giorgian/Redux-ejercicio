import React, { PropTypes } from 'react'

const ShoppingCard = ({stock, comprarItem, disabled, agregarItem }) => {

  const comprar = (event) => { comprarItem(event.target.value)}
  const agregar = (event) => { agregarItem(stock)}


  return (
    <div>
    <h1>SHOPPING CARD </h1>
    <i> un label con en nombre de un producto y su stock en número , por ejemplo : Pantalon Stock: 10
      y un botón vender que cada vez que se haga click va disminuyendo en uno el stock,
      y que cuando llegue a cero el boton vender cambie de nombre a Sold out.
      CHEVERE. Y q ademas haya un boton de [mas] para agregar un item </i>

      <div style={{ marginBottom: '5px' }}>Pantalon:{stock}</div>

      <button onClick={comprar} disabled={disabled} >Comprar</button>
      <button onClick={agregar} >Añadir stock </button>
    </div>

  )
}

ShoppingCard.propTypes= {
  stock: PropTypes.number,
  comprarItem: PropTypes.func,
  disabled: PropTypes.bool,
  comprar: PropTypes.func,
}
export default ShoppingCard

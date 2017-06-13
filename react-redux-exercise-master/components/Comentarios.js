import React, { PropTypes } from 'react';

const Comentarios = ({ comentario, comentarioAgregado, guardarComentario, agregarComentario }) => {

    const guardar = (event) => { guardarComentario(event.target.value)}

  return (
    <div>
      <h1>COMENTARIOS</h1>
      <i>4.- un input donde escribiré un comentario o recordatorio,
      al hacer click en un button que tenndrá, el recordatorio del input se agrega a un Card.
      Es historico, guarda una lista de comentarios y muestra un card para cada uno </i>
      
      <div>{comentarioAgregado}</div>
      <form>
        <input
        type="text"
        value={comentario}
        onChange={guardar}
        />
      </form>
      <button onClick={(event) => { agregarComentario(comentario)}} >comentar</button>
    </div>

  )
}

Comentarios.propTypes = {
  comentario: PropTypes.string,
  comentarioAgregado: PropTypes.string,
  guardarComentario: PropTypes.func,
  agregarComentario: PropTypes.func,
}

export default Comentarios;

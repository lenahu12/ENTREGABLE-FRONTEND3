import React from "react";

export default class Historial extends React.Component {
  render() {
    const lista = this.props.lista;
    return (
      <div className="recordatorio">
        <h3>Seleccion anterior: {lista[lista.length - 1]}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{lista.map((opcion, key) => (<li key={key}>{opcion}</li>))}</ul>
      </div>
    );
  }
}

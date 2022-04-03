import React from "react";

export default class Opciones extends React.Component {
  render() {
    const opcion = this.props.opcion;
    const opcionA = this.props.opcionA;
    const opcionB = this.props.opcionB;
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" onClick={ () => { opcionA()}}>A</button>
          <h2>{opcion.a}</h2>
        </div>
        <div className="opcion">
          <button className="botones" onClick={ () => { opcionB()}}>B</button>
          <h2>{opcion.b}</h2>
        </div>
      </div>
    );
  }
}

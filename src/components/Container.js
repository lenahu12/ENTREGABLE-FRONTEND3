import React from "react";
import json from "./data.json";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Historial from "./Historial";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      historial: [],
      cantOpciones: 1,
      opcionActual: "",
    };
    this.state.opcionA = this.opcionA.bind(this);
    this.state.opcionB = this.opcionB.bind(this);
  }

  opcionA = () => {
    if (this.state.cantOpciones < 5) {
      this.setState({ cantOpciones: this.state.cantOpciones + 1 });
      this.setState({ opcionActual: "a" });
      this.state.historial.push("A");
    } else {
      alert("GAME OVER");
    }
  };

  opcionB = () => {
    if (this.state.cantOpciones < 5) {
      this.setState({ cantOpciones: this.state.cantOpciones + 1 });
      this.setState({ opcionActual: "b" });
      this.state.historial.push("B");
    } else {
      alert("GAME OVER");
    }
  };

  buscarPorID = (json, id) => {
    let i = 0;
    while (json[i].id !== id && i < json.length) {
      i++;
    }
    return i;
  };

  render() {
    const data = json;
    return (
      <React.Fragment>
        <Historia historia={ data[ this.buscarPorID( data, this.state.cantOpciones + this.state.opcionActual)].historia}/>
        <Opciones opcion={ data[ this.buscarPorID( data, this.state.cantOpciones + this.state.opcionActual)].opciones}
          opcionA={this.opcionA}
          opcionB={this.opcionB}
        />
        <Historial lista={this.state.historial} />
      </React.Fragment>
    );
  }
}

import React from "react";
import "./Testimony.css";

export default function Testimony(props) {
  return (
    <div className="contenedor">
      <div className="content box1">
        <img src={require(`../../images/${props.ruta}.png`)} alt={props.alt} />
      </div>
      <div className="content box2">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <div className="contenedor-testimonio">
          <p className="testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </div>
  );
}

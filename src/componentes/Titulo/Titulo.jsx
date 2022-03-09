import React, { memo } from "react";
import H2 from "../H2/H2";
import Logo from "../Logo/Logo";
import './Titulo.css'
const Titulo = memo(() => {
  return (
    <header>
      <div className="title-container">
        <Logo />
        <H2>EL PRIMER RECETARIO DE EDWIN MAY </H2>
        <Logo />
      </div>
    </header>
  );
});

export default Titulo;

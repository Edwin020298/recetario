import React, { useState } from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import Titulo from "./componentes/Titulo/Titulo";

function App() {
  const initialState = [
    {
      id: 1,
      nombre: "pizza",
      calorias: "266",
      descripcion: " amasado con agua, sal, levadura y harina.",
      ingredientes: "cebolla, champiñones",
    },
    {
      id: 2,
      nombre: "espagueti ",
      calorias: "158",
      descripcion: " pasta italiana elaborada con harina de grano duro y agua",
      ingredientes: "mediacrema,tomate",
    },
  ];

  const [data, setData] = useState(initialState);
  const [setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const var1 = 0;
  const algo = data[var1]?.id;

  const [personaSeleccionada, setPersonaSeleccionada] = useState({
    id: "",
    nombre: "",
    calorias: "",
    descripcion: "",
    ingredientes: "",
  });

  const seleccionarPersona = (elemento, caso) => {
    setPersonaSeleccionada(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const eliminar = () => {
    setData(data.filter((persona) => persona.id !== personaSeleccionada.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPersonaSeleccionada(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = personaSeleccionada;
    valorInsertar.id = data.length + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };
  return (
    <div className="App">
      <header>
        <Titulo logotitu={Titulo.receta} />
      </header>
      <br />

      <div id="main-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>calorias</th>
              <th>descripcion</th>
              <th>ingredientes</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento, key) => (
              <tr key={key}>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.calorias}</td>
                <td>{elemento.descripcion}</td>
                <td>{elemento.ingredientes}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => seleccionarPersona(elemento, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que Deseas Eliminar la receta{" "}
          {personaSeleccionada && personaSeleccionada.nombre}
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar receta</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data.length + 1}
            />
            <br />

            <label>nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={personaSeleccionada ? personaSeleccionada.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>calorias</label>
            <input
              className="form-control"
              type="text"
              name="calorias"
              value={personaSeleccionada ? personaSeleccionada.calorias : ""}
              onChange={handleChange}
            />
            <br />

            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={personaSeleccionada ? personaSeleccionada.descripcion : ""}
              onChange={handleChange}
            />
            <br />
            <label>ingredientes</label>
            <input
              className="form-control"
              type="text"
              name="ingredientes"
              value={
                personaSeleccionada ? personaSeleccionada.ingredientes : ""
              }
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
          </button>

          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Nueva Receta
      </button>
      <br />
      <br />
    </div>
  );
}
export default App;

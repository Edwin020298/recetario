import React, { memo } from 'react';
import { Modal, ModalBody,ModalFooter } from "reactstrap";
const ConfirmationModal = memo(({modalEliminar,setModalEliminar,eliminar,personaSeleccionada}) => {
    return (
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
    );
});

export default ConfirmationModal;
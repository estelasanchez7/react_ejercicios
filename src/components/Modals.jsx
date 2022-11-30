/*Ejercicios de la ventana modal*/
import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from "./ContactForm"

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false)
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>

      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="NAture" />
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm/>
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <Modal isOpen={isOpenPortal} closeModal={closeModalPortal}>
      <h3>Modal en Portal</h3>
        <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente a donde carga nuestra app de React, gracias a un Ract Portal</p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </Modal>
    </div>
  );
};

export default Modals;

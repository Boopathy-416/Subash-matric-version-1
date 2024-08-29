// src/Flasher.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Flasher.css'; // Import the CSS for styling

Modal.setAppElement('#root'); // This is important for accessibility reasons

const Flasher = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <img src="/images/Advertisment.jpg" alt="Intro" className="modal-image" />
      </div>
    </Modal>
  );
};

export default Flasher;

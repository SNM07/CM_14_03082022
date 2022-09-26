import React from "react";
import "./modal.css";

export const Modal = ({ showModal, closeModal, modalTitle, modalBody }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
    <div
      className="modalMain"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modalBody" style={{}}>
        <div className="modalTitle">
          <p>{modalTitle}</p>
          <span onClick={closeModal} className="closeModalX">
            x
          </span>
        </div>
        <div className="modalContent">
          <div className="modalText">
            <p>{modalBody}</p>
          </div>
          <div className="modalBtn">
            <button onClick={closeModal} className="closeBtn">
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modalBg" onClick={closeModal}></div>
    </div>
  );
};

import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
`;
const ModalBackground = styled.div`
  background: rgba(52, 52, 52, 0.8);
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const ModalBody = styled.div`
  background: rgb(255, 255, 255);
  width: 50%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

const ModalTitleContainer = styled.div`
  background: #85c04e;
  color: #ffffff;
  padding: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h4`
  font-family: sans-serif;
`;

const ModalCloseX = styled.span`
  font-family: sans-serif;
  font-size: 2rem;
  cursor: pointer;
`;

const ModalContent = styled.div``;

const ModalTextContainer = styled.div``;

const ModalText = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 2%;
  margin: 2%;
`;

const ModalButtonContainer = styled.div``;

const ModalButton = styled.button`
  display: block;
  font-size: 1rem;
  font-family: sans-serif;
  margin-left: auto;
  padding: 2% 4%;
  background: #5e8838;
  color: rgb(255, 255, 255);
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Modal = ({ showModal, closeModal, modalTitle, modalBody }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <ModalContainer
      className="modalMain"
      style={{ display: showModal ? "block" : "none" }}
    >
      <ModalBody className="modalBody" style={{}}>
        <ModalTitleContainer className="modalTitle">
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalCloseX onClick={closeModal} className="closeModalX">
            x
          </ModalCloseX>
        </ModalTitleContainer>
        <ModalContent className="modalContent">
          <ModalTextContainer className="modalText">
            <ModalText>{modalBody}</ModalText>
          </ModalTextContainer>
          <ModalButtonContainer className="modalBtn">
            <ModalButton onClick={closeModal} className="closeBtn">
              Close
            </ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalBody>
      <ModalBackground
        className="modalBg"
        onClick={closeModal}
      ></ModalBackground>
    </ModalContainer>
  );
};

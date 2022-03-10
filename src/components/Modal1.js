import styled from "styled-components";

const Modal = (props) => {
  return (
    <>
      {" "}
      {props.showModal ? (
        <Background>
          <ModalWrapper showModal={props.showModal}>
            <ModalImg src={props.pic} alt="camera" />
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch.</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => props.setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

// const ModalBox = styled.div`
// width: 850px;
// height: 550px;
// border: 10px white solid;
// padding: 20px;
// box-shadow: 3px 3px 10px rgba(0,0,0, 0.5;
// 	z-index: 10;
// 	position: relative;
// `;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid red;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

import css from "./window.module.css";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Window = ({ show, close, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={(e) => close(e)}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.close_button_container}>
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className={css.close_btn} onClick={close}>
          X
        </button>
      </div>
      <div>
        <h2>Description</h2>
        <p>{item.description}</p>
        <h2>Status</h2>
        <p>{item.status}</p>
      </div>
    </Modal>
  );
};

export default Window;

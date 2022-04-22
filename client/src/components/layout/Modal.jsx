import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}>
    X
  </div>
);

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const Modal = (props) => (
  <>
    {ReactDom.createPortal(
      <Backdrop onClose={props.onClose} />,
      document.getElementById('overlays')
    )}
    {ReactDom.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      document.getElementById('overlays')
    )}
  </>
);

export default Modal;

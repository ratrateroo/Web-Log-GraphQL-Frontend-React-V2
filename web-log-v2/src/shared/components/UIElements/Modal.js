import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = props => {
   <div className={`c-modal${props.className}`} style={props.style}>
      <header className={`c-modal__header-${props.headerClass}`}>
         <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event.preventDefault}>
         <div className={`c-modal__content-${props.contentClass}`}>{props.children}</div>
         <footer className={`c-modal__footer-${props.contentClass}`}>{props.children}</footer>
      </form>
   </div>;

   return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
   return (
      <React.Fragment>
         {props.show && <Backdrop onClick={props.onCancel} />}
         <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} clasNames="modal">
            <ModalOverlay {...props} />
         </CSSTransition>
      </React.Fragment>
   );
};

export default Modal;

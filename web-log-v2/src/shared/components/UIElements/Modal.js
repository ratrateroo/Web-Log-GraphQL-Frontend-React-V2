import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const ModalOverlay = props => {
    <div className={`c-modal${props.className}`} style={props.style}>
        <header className={`c-modal__header-${props.className}`} {props.headerClass}>
            <h2>{props.header}</h2>
        </header>
        <form
            onSubmit={
                props.onSubmit ? props.onSubmit : event.preventDefault
            }
        >
            <div className={`c-modal__content-${props.contentClass}`}>
                {props.children}
            </div>
            <footer className={`c-modal__footer-${props.contentClass}`}>
                {props.children}
            </footer>
        </form>
    </div>


    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {};

export default Modal;

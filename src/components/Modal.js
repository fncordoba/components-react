import React from 'react';
import './Modal.css';
import Button from './Button';

function Modal(props) {
  return (
    <>
      <div className="modal">
        <div className="modal-guts">
          <div className="header">
            <div className="header-title">
              {props.title}
            </div>
            <button className="btn-close" onClick={props.onClose}>X</button>          
          </div>
          <div className="content">
            {props.children}
          </div>
          <div className="actions">
            <Button onClick={props.onClose}>Cancel</Button>
            <Button onClick={props.onSubmit} primary>{props.submitLabel || "Submit"}</Button>
          </div>

        </div>
      </div>
      <div className="overlay">

      </div>
    </>
  );
}

export default Modal;


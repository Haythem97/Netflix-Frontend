import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            <h2>{props.title}</h2>
            {props.children}
            <div className="btn__group">
                <button onClick={props.cancelFunction}>Annuler</button>
                <button onClick={props.validateFunction}>Valider</button>
            </div>
        </div>
    );
}

export default Modal;

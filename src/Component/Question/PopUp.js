import React, { useState } from 'react'
import Modal from 'react-modal'
import Question from './Question';

Modal.setAppElement("#root");
function PopUp(props) {
    const [modalOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setModalIsOpen(true)}>
                <Question {...props} />
            </div>
            <Modal isOpen={modalOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>
                <h2>
                    {props.title}
                </h2>
                <p>Body</p>
                <a href={props.link} target="_blank">Link</a>
                <div><button onClick={() => setModalIsOpen(false)}>Close</button></div>
            </Modal>
        </div>
    )
}

export default PopUp

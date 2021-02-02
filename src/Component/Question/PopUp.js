import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Modal from 'react-modal';
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
                    {props.title}  <a href={props.link} target="_blank">Link</a>
                    <div><button onClick={() => setModalIsOpen(false)}>Close</button></div>
                </h2>
                <div>{ReactHtmlParser(props.body)}</div>
                
            </Modal>
        </div>
    )
}

export default PopUp

import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalDialog.css'

function ModalDialog() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>Trang Web đang bảo trì </Modal.Title>
                </Modal.Header>
                <Modal.Body>Chúng tôi thành thật xin lỗi về sự bất tiện này !</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose} className="modal-close">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDialog;
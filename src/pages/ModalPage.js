import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

function ModalPage () {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
            <Button primary onClick={handleClose}>I accept</Button>
        </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Heaps of stuff.... la la la la </p>
        </Modal>

    return <div>
        <Button primary onClick={handleClick}>
            Open Modal
        </Button>
        {showModal && modal}
    </div>
}

export default ModalPage
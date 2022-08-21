import './Modal.css';

interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose } : IModalProps) => {
    return (
        <div className='modal'>
            <div className="modal__backdrop" onClick={onClose} />
            <div className="modal__body">
                { children }
            </div>
        </div>
    )
}

export default Modal;

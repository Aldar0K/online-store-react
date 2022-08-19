import './Modal.css';

interface IModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

const Modal = ({ children, title, onClose } : IModalProps) => {
    return (
        <div className='modal'>
            <div className="modal__backdrop" onClick={onClose} />
            <div className="modal__body">
                <h1>{ title }</h1>
                { children }
            </div>
        </div>
    )
}

export default Modal;

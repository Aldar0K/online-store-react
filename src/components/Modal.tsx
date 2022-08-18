interface IModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

const Modal = ({ children, title, onClose } : IModalProps) => {
    return (
        <>
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-body">
                <h1>{ title }</h1>
                { children }
            </div>
        </>
    )
}

export default Modal;

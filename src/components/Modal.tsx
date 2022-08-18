interface IModalProps {
    children: React.ReactNode;
    title: string
}

const Modal = ({ children, title } : IModalProps) => {
    return (
        <>
            <div className="modal-backdrop" />
            <div className="modal-body">
                <h1>{ title }</h1>
                { children }
            </div>
        </>
    )
}

export default Modal;

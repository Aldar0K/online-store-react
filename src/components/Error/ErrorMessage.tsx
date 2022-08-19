import './ErrorMessage.css';

interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
        <h3 className="products-error">{ error }</h3>
    );
}

export default ErrorMessage;

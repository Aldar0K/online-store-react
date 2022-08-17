interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
        <p className="products-error">{ error }</p>
    );
}

export default ErrorMessage;

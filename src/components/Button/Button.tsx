import './Button.css';

const Button = ({
    text = 'button',
    type = 'primary',
    small = false,
    disabled = false,
    onClick = () => {}
}: {
    text: string,
    type: 'primary'|'secondary'|'plus'|'info',
    small: boolean,
    disabled: boolean,
    onClick: () => void,
}) => {
    const sizeClass = small ? 'button_small' : 'button_big';

    switch(type) {
        case 'primary':
            return (
                <button
                    disabled={disabled}
                    className={`button button_primary ${sizeClass}`}
                    onClick={onClick}
                >
                    {text}
                </button>
            );
        case 'secondary':
            return (
                <button
                    disabled={disabled}
                    className={`button button_secondary ${sizeClass}`}
                    onClick={onClick}
                >
                    {text}
                </button>
            );
        case 'plus':
            return (
                <button
                    disabled={disabled}
                    className={`button button_plus ${sizeClass}`}
                    onClick={onClick}
                >
                    {text}
                </button>
            );
        case 'info':
            return (
                <button
                    disabled={disabled}
                    className={`button button_info ${sizeClass}`}
                    onClick={onClick}
                >
                    {text}
                </button>
            );   
    }
}

export default Button;

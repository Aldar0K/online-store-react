import React, { useState } from 'react';
import Button from '../Button/Button';
import ErrorMessage from '../Error/ErrorMessage';
import './Auth.css';

interface IAuthFormProps {
    onLogIn: () => void
}

interface IAuthUserInfo {
    id: number;
    email: string;
    password: string;
}

const AuthForm = ({ onLogIn }: IAuthFormProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        console.log(e.target);
        e.preventDefault();

        if (email.trim().length === 0 || password.trim().length === 0) {
            setError('Please enter valid email and password');
            return;
        }

        // TODO добавить дополнительную валидацию

        onLogIn();
    }

    const changeEmailHandlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const changePasswordHandlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <h2>Authorization</h2>
            <form
                className="auth-form"
            >
                <input
                    type="text"
                    className="auth-form__input"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={changeEmailHandlder}
                />
                <input
                    type="text"
                    className="auth-form__input"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={changePasswordHandlder}
                />

                {error && <ErrorMessage error={error} />}

                <div className='auth-container'>
                    <Button
                        text='Sign In'
                        type="secondary"
                        small={false}
                        disabled={false}
                        onClick={() => {}}
                    />
                    <Button
                        text='Log In'
                        type="primary"
                        small={false}
                        disabled={false}
                        onClick={() => {}}
                    />
                </div>
            </form>
        </>
    )
}

export default AuthForm;

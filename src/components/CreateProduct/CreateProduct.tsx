import './CreateProduct.css';
import React, { useState } from "react";
import Button from '../Button/Button';
import ErrorMessage from '../Error/ErrorMessage';

interface ICreateProductProps {
    onCreate: () => void
}

const CreateProduct = ({ onCreate }: ICreateProductProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (value.trim().length === 0) {
            setError('Please enter valid title');
            return;
        }

        onCreate();
    }

    const changeHandlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>Create new product</h1>
            <form
                className="create-form"
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    className="create-form__input"
                    placeholder="Enter product title..."
                    value={value}
                    onChange={changeHandlder}
                />

                {error && <ErrorMessage error={error} />}

                <Button
                    text='Submit'
                    type="primary"
                    small={false}
                    disabled={false}
                    onClick={() => {}}
                />
            </form>
        </>
    )
}

export default CreateProduct;

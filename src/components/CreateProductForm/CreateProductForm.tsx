import './CreateProductForm.css';
import React, { useState } from "react";

interface ICreateProductProps {
    onCreate: () => void
}

const CreateProductForm = ({ onCreate }: ICreateProductProps) => {
    const [value, setValue] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        onCreate();
    }

    const changeHandlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
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

            <button
                type="submit"
                className="create-form__button"
            >
                Create
            </button>
        </form>
    )
}

export default CreateProductForm;

import './CreateProductForm.css';
import React, { useState } from "react";
import Button from '../Button/Button';

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

            <Button
                text='Submit'
                type="primary"
                small={false}
                disabled={false}
                onClick={() => console.log('Product created!')}
            />
        </form>
    )
}

export default CreateProductForm;

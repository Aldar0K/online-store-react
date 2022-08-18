import React, { useState } from "react";

const CreateProduct = () => {
    const [value, setValue] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
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
                className="create-input"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandlder}
            />

            <button
                type="submit"
                className="create-button"
            >
                Create
            </button>
        </form>
    )
}

export default CreateProduct;

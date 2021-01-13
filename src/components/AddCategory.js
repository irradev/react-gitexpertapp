import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChane = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCategories(c => [inputValue, ...c]);
            setInputValue('');
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChane }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
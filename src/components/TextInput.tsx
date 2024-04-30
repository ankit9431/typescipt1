import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
    label: string;
    placeholder: string;
    className?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, className, value, setValue }) => {
    return (
        <div className='form'>
            <div>
             <label htmlFor={label}>{label}</label>
            </div>
            <input
                className='form1'
                type='text'
                placeholder={placeholder}
                id={label}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            />
        </div>
    );
};

export default TextInput;

import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
    return (
        <form>
            <p>
                <label htmlFor="name">Name: </label>
                <Input id="name" />
            </p>
            <p>
                <label htmlFor="email">Email: </label>
                <Input id="email" />
            </p>
            <Button />
        </form>
    )
}

export default Form;
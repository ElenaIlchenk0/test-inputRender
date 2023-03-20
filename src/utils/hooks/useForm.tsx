import React from 'react';
import { TInputsData } from '../types/types';
import useFormStyles from './useForm.module.css';

export const useForm = (data: TInputsData[]) => {

    const inputValues: { [key: string]: string } = {};
    data.forEach((item) => {
        inputValues[item.id] = item.defaultValue || '';
    })

    const [values, setValues] = React.useState(inputValues);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const value = input.value;
        const name = input.name;
        setValues({ ...values, [name]: value });
    }

    return { values, handleChangeInput };
}

import React from 'react';
import inputRenderStyles from './InputRender.module.css';
import { TInputsData } from '../utils/types/types'

interface IInputRenderProps  {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputsData: TInputsData[];
    values: { [key: string]: string }
}

const InputRender: React.FC<IInputRenderProps> = ({ inputsData, onChangeHandler, values }) => {
    return (
        <>
            {
                inputsData &&
                inputsData.map((input) => {
                    return (
                        <input
                            key={input.id}
                            name={input.id}
                            type={input.type.replace(/input/i, '').toLowerCase()}
                            required={input.required || false}
                            placeholder={input.label}
                            value={values[input.id]}
                            className={inputRenderStyles.input}
                            onChange={onChangeHandler}
                        />)
                })
            }
        </>
    );
}

export default InputRender;

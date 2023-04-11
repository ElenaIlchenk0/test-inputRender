import React, { useState, useEffect } from 'react';
import InputRender from '../InputRender/InputRender'
import appStyles from './App.module.css';
import { useForm } from '../utils/hooks/useForm'
import { inputsData } from '../data/data'

function App() {

  const { values, handleChangeInput } = useForm(inputsData);
  const [ isDisabled, setDisabled ] = useState(true);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>, values: {[key: string]: string}) => {
    e.preventDefault();
    console.log(values);
  }

  useEffect(() =>{
    const requiredEmptyInputs = inputsData.filter(el => el.required === true && values[el.id] === '');
    setDisabled(requiredEmptyInputs.length > 0)
  }, [values])

  return (
    <form onSubmit={(e) => submitHandler(e, values)} className={appStyles.form}>
      <legend>Авторизация</legend>
      <InputRender
        inputsData={inputsData}
        values={values}
        onChangeHandler={handleChangeInput}
      />
      <button
        type="submit"
        className={appStyles.submit}
        disabled={isDisabled}
      >
        Submit
      </button>
    </form>
  );
}

export default App;

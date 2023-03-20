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
    let required = inputsData.filter(el => el.required === true);
    let emptyInputs = required.filter(item => (values[item.id] === ''));
    setDisabled(emptyInputs.length > 0)
  }, [values])

  return (
    <form onSubmit={(e) => submitHandler(e, values)} className={appStyles.form}>
      <InputRender
        inputsData={inputsData}
        values={values}
        onChangeHandler={handleChangeInput}
        title='Авторизация'
        subTitle=''
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
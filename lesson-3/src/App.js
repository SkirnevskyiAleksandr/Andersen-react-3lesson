import './App.css';
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Table } from './components/Table/Table';
import { Form } from './components/Form/Form.js';

const isTableTrue = false;
const formState = {};

function App() {
  const [isTable, setIsTable] = useState(isTableTrue);
  const [formInputValues, setFormInputValues] = useState(formState)

  const changeIsTableTrue = (flag, formInputsValues) => {
    setIsTable(flag)
    setFormInputValues(formInputsValues)
  }

  // formInputsStore = (value) => {
  //   setFormInputValues(value)
  // }
  console.log(isTable)

  if (isTable === true) {
    return <Table inputValue={formInputValues} />;
  }

  return <Form tableTrue={changeIsTableTrue} />;
}

// return (
//     // <BrowserRouter >
//     //   <Routes>
//     //     <Route path="/" element={<Form />} />
//     //     <Route path='/Table' element={<Table />} />
//     //   </Routes >
//     // </BrowserRouter>
//   )


export default App;

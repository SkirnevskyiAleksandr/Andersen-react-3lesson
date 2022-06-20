import './App.css';
import React, { useState } from "react";
import { Table } from './components/Table/Table';
import { Form } from './components/Form/Form.js';

const isTableTrue = false;
const formState = {};

export function App() {
  const [isTable, setIsTable] = useState(isTableTrue);
  const [formInputValues, setFormInputValues] = useState(formState)

  const changeIsTableTrue = (flag, formInputsValues) => {
    setIsTable(flag)
    setFormInputValues(formInputsValues)
  }

  if (isTable === true) {
    return <Table inputValue={formInputValues} />;
  }

  return <Form tableTrue={changeIsTableTrue} />;
}


import React, { useState } from 'react';
import FormStyles from './Form.module.css';
import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';

const textareaRows = 7;
const maxSymbolLength = 600;
const telLength = 12;

const store = {
    Name: '',
    LastName: '',
    Birthday: '',
    PhoneNumber: '',
    WebPage: '',
    ElevatorPitch: '',
    HardSkills: '',
    YourLastProject: ''
};

const errorStore = {
    Name: '',
    LastName: '',
    Birthday: '',
    PhoneNumber: '',
    WebPage: '',
    ElevatorPitch: '',
    HardSkills: '',
    YourLastProject: '',
    EmptyValue: ''
}

const textareaCounter = {
    ElevatorPitch: 0,
    HardSkills: 0,
    YourLastProject: 0
}

export const Form = ({ tableTrue }) => {
    const [state, setState] = useState(store);
    const [errorValue, setErrorValue] = useState(errorStore);
    const [counter, setTextareaCounter] = useState(textareaCounter);

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setState({ ...state, [name]: value })
        validator(event)
    };

    const validator = (event) => {
        switch (event.target.type) {
            case 'text':
                textValidator(event)
                break;
            case 'tel':
                telValidator(event)
                break;
            case 'url':
                urlValidator(event)
                break;
            case 'textarea':
                inputValueCounter(event)
                break;
            default: console.log(`unknown type`)
        }
    }

    const textValidator = (event) => {
        const inputValue = event.target.value.trim();
        const firstSymbol = inputValue.charAt(0);

        if (firstSymbol !== firstSymbol.toUpperCase()) {
            setErrorValue({ ...errorValue, [event.target.name]: 'First symbol should be capital' })
            return;
        } else {
            setErrorValue({ ...errorValue, [event.target.name]: '' })
        }
    }

    const telValidator = (event) => {
        const telInput = event.target.value.split(' ').join('');

        if (Number.isNaN(+telInput)) {
            setErrorValue({ ...errorValue, [event.target.name]: 'You should enter only numbers' })
            return;
        } else {
            setErrorValue({ ...errorValue, [event.target.name]: '' })
        }
    }

    const urlValidator = (event) => {
        const inputTrimValue = event.target.value.trim();

        if (!inputTrimValue.startsWith("https://") && inputTrimValue.length !== 0) {
            setErrorValue({ ...errorValue, [event.target.name]: 'you must enter: "https://"' })
        } else {
            setErrorValue({ ...errorValue, [event.target.name]: '' })
        }
    }

    const inputValueCounter = (event) => {
        const noTrim = event.target.value.trim();

        if (noTrim.length === maxSymbolLength) {
            setTextareaCounter({
                ...textareaCounter, [event.target.name]: noTrim.length,
            })
            setErrorValue({ ...errorValue, [event.target.name]: `you should enter not more than ${maxSymbolLength} symbols` })
        } else {
            setTextareaCounter({
                ...textareaCounter, [event.target.name]: noTrim.length,
            })
            setErrorValue({ ...errorValue, [event.target.name]: `` })
        }
    }

    const clearFunction = () => {
        setErrorValue({
            Name: '',
            LastName: '',
            Birthday: '',
            PhoneNumber: '',
            WebPage: '',
            ElevatorPitch: '',
            HardSkills: '',
            YourLastProject: '',
            EmptyValue: ''
        });

        setState({
            Name: '',
            LastName: '',
            Birthday: '',
            PhoneNumber: '',
            WebPage: '',
            ElevatorPitch: '',
            HardSkills: '',
            YourLastProject: ''
        });

        setTextareaCounter({
            ElevatorPitch: 0,
            HardSkills: 0,
            YourLastProject: 0
        })
    }

    const isEmptyInput = (event) => {
        const objValue = Object.values(state);
        event.preventDefault();

        if (objValue.some((elem) => { return elem === '' })) {
            setErrorValue({ ...errorValue, EmptyValue: 'you have an empty value' })
        } else {
            setErrorValue({ ...errorValue, EmptyValue: '' })
            tableTrue(true, state)
        }
    }

    return (
        <form action="/table"
            className={FormStyles.main}
            method="post"
        >
            <Input name={'Name'}
                type={'text'}
                errorValue={errorValue.Name}
                change={onChange}
                stateInputValue={state.Name}
            />
            <Input name={'LastName'}
                type={'text'}
                errorValue={errorValue.LastName}
                change={onChange}
                stateInputValue={state.LastName}
            />
            <Input name={'Birthday'}
                type={'date'}
                errorValue={errorValue.Birthday}
                change={onChange}
                stateInputValue={state.Birthday}
            />
            <Input name={'PhoneNumber'}
                type={'tel'}
                errorValue={errorValue.PhoneNumber}
                change={onChange}
                maxSymbolLength={telLength}
                stateInputValue={state.PhoneNumber}
            />
            <Input name={'WebPage'}
                type={'url'}
                errorValue={errorValue.WebPage}
                change={onChange}
                stateInputValue={state.WebPage}
            />
            <Textarea name={'ElevatorPitch'}
                type={'textarea'}
                rows={textareaRows}
                maxSymbolLength={maxSymbolLength}
                errorValue={errorValue.ElevatorPitch}
                counter={counter.ElevatorPitch}
                change={onChange}
                stateInputValue={state.ElevatorPitch}
            />
            <Textarea name={'HardSkills'}
                type={'textarea'}
                rows={textareaRows}
                maxSymbolLength={maxSymbolLength}
                errorValue={errorValue.HardSkills}
                counter={counter.HardSkills}
                change={onChange}
                stateInputValue={state.HardSkills}
            />
            <Textarea name={'YourLastProject'}
                type={'textarea'}
                rows={textareaRows}
                maxSymbolLength={maxSymbolLength}
                errorValue={errorValue.YourLastProject}
                counter={counter.YourLastProject}
                change={onChange}
                stateInputValue={state.YourLastProject}
            />
            <div className={FormStyles.button_wrapper}>
                <button onClick={clearFunction} className={FormStyles.btn} style={{ backgroundColor: 'red' }} type="reset" >Clear</button>
                <button onClick={isEmptyInput} className={FormStyles.btn} type="submit">Save</button>
            </div>
            <div className={FormStyles.emptyValue}>{errorValue.EmptyValue}</div>
        </form>
    );
}



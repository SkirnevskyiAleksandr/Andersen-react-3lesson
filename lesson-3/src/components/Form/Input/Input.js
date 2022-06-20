import React from "react";
import inputStyles from './Input.module.css';

export const Input = ({ name, maxSymbolLength, type, change, rows, stateInputValue, errorValue }) => {
    return (
        <label htmlFor="" className={inputStyles.label}>
            {name}
            <input
                onChange={(event) => { change(event) }}
                maxLength={maxSymbolLength}
                type={type}
                name={name}
                className={inputStyles.input}
                placeholder={name}
                rows={rows}
                value={stateInputValue}
            />
            <div className={inputStyles.warning}>{errorValue}</div>
        </label>
    );
}
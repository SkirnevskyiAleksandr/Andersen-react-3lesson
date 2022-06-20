import React from "react";
import TextareaStyle from './Textarea.module.css'

export const Textarea = ({ name, type, rows, stateInputValue, maxSymbolLength, errorValue, counter, change }) => {
    return (
        <label htmlFor="" className={TextareaStyle.label}>
            {name}
            <textarea onChange={change}
                maxLength={maxSymbolLength}
                type={type}
                name={name}
                className={TextareaStyle.textarea}
                placeholder={name}
                rows={rows}
                value={stateInputValue}
            />
            <div className={TextareaStyle.count}>
                <div className={TextareaStyle.warning}>
                    {errorValue}
                </div>
                <div>
                    <span>{counter}</span>
                    <span >/ {maxSymbolLength}</span>
                </div>
            </div>
        </label>
    )
}
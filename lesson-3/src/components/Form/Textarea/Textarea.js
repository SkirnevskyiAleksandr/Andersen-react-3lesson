import React from "react";
import TextareaStyle from './Textarea.module.css'

export const Textarea = ({ name, type, rows, maxSymbolLength, errorValue, counter, change }) => {

    // const handleChange = (event) => {
    //     this.inputValueCounter(event)
    //     this.props.propsChange(this.props.name, event.target.value)
    // }

    // const inputValueCounter = (event) => {
    //     const noTrim = event.target.value.trim();

    //     if (noTrim.length === this.props.symbolLength) {
    //         this.setState({
    //             inputValue: noTrim.length,
    //         })
    //         this.props.propsChange(this.props.propsErrorName, 'you should enter not more than 600 symbols')
    //     } else {
    //         this.setState({
    //             inputValue: noTrim.length,
    //         })
    //         this.props.propsChange(this.props.propsErrorName, '')
    //     }
    // }

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
            // readOnly={this.state.readOnly}
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
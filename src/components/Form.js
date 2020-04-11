import React, { useState, useContext } from "react";
import { AlertContext } from "../contextCopy/alertContext";
export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)
    const submitHandler = event => {
        event.preventDefault();
        alert.show(value, 'succes')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
            <input className="form-control" value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Введите название заметки"/>
            </div>
        </form>
    )
}
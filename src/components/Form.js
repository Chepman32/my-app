import React, { useState, useContext } from "react";
import { AlertContext } from "../contextCopy/alertContext";
import { FirebaseContext } from "../contextCopy/firebase/firebaseContext";
export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);
    const submitHandler = event => {
        event.preventDefault();
        if(value.trim()) {
            firebase.addNote(value).then(() => {
                alert.show('Заметка была создана', 'success');
            }).catch(() => {
                alert.show('Что-то пошло не так', 'danger')
            })
            setValue('')
        }
        else {
            alert.show('Введите название заметки');
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
            <input className="form-control" value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Введите название заметки"/>
            </div>
        </form>
    )
}
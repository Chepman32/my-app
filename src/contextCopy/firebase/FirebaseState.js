import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from "../../components/types";
import Axios from "axios";
export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false,
    }
    const url = 'https://react-notes-eb409.firebaseio.com';
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const fetchNotes = async () => {
        showLoader();
        const res = await Axios.get(`${url}/notes.json`);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key], id: key
            }
        })
        dispatch({type: FETCH_NOTES, payload})
    };
    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        };
        try {
            const res = await Axios.post(`${url}/notes.json`, note);
        const payload = {...note, id: res.data.name};
        dispatch({type: ADD_NOTE, payload})
        } catch(e) {
            throw new Error(e.message)
        }
        
    };
    const removeNote = async id => {
        Axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }
    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchNotes, addNote, removeNote, loading: state.loading, notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
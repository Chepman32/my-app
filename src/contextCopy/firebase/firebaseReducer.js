import { SHOW_LOADER, ADD_NOTE } from "../../components/types";
const handlers = {
    DEFAULT: state => state,
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: [...state.notes, payload]
    }),
    FETCH_NOTES: (state, {payload}) => ({...state, notes: {...payload}}),
    REMOVE_NOTE: (state, {payload}) => ({
        ...state, notes: state.notes.filter(note => note.id !== payload)
    })
}
export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}
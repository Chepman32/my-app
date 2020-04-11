import React from "react";
import { SHOW_ALERT, HIDE_ALERT } from "../components/types";
const handlers = {
    DEFAULT: () => {
state=> state;
    },
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: true})
};
export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};
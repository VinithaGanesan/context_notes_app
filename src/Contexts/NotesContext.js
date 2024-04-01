import React, { createContext, useReducer } from 'react';


export const NotesContext = createContext();

const notesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            const id = Math.random() * 100
            let note = { ...action.payload, id }
            return { ...state, noteList: [...state.noteList, note] }
            case 'REMOVE_NOTE':
                let list = state.noteList.filter((task) => task.id !== action.payload.id)
                return {...state,noteList:list}
            case 'UPDATE_NOTE':
                let updateList = state.noteList
                    .map((task) => task.id === action.payload.id ? action.payload : task)
                return {...state,noteList:[...updateList]}
            case 'GET_NOTES':
                return state.noteList
            case 'SET_SELECTED_NOTE':
                return {...state,selectedNote:{...action.payload}}
            case 'GET_SELECTED_NOTE':
                return state.selectedNote
            default:
                return state
    }
}


export default function NotesContextProvider({ children }) {

    const [state, dispatch] = useReducer(notesReducer, {
        noteList: [],
        selectedNote: {}
    })

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

import React, { useContext, useState } from 'react'
import { NotesContext } from '../../Contexts/NotesContext';
import UpdateNote from '../UpdateNote/UpdateNote';
import './MyNotes.css'

export default function MyNotes() {

    const { state, dispatch } = useContext(NotesContext);

    const { noteList } = state;

    const deleteNote = (data) => {
        console.log("note deleted");
        dispatch({type: 'REMOVE_NOTE',payload:data})
    }

    const updateNote = (data) => {
        console.log("note updated");
        setModalShow(true);
        dispatch({type:'SET_SELECTED_NOTE',payload:data})
    }

    const [modelShow, setModalShow] = useState(false);

    function days(date) {
        var currdate = new Date();
        var saveddate = date;
        var timediff = saveddate.getTime() - currdate.getTime();
        var days = Math.round(timediff / (1000 * 3600 * 24));
        return days;
    }

    return (
        <>
            <div className="saved-notes-container">
                <div className="icon-link notes-heading">
                    <i className='bx bx-notepad bx-sm'></i>
                    My Notes
                </div>
                <div className="heading-1">
                    Recently viewed
                </div>
                <div className="saved-note">
                    {
                        noteList && noteList.map((data, index) => (
                            <div className="notes-updated shadow" key={data.id}>
                                <div className="note-update" >
                                    <div className="note-title">
                                        {data.title}
                                    </div>
                                    <div className="note-icons">
                                        <button className="btn"
                                            id="edit-notes"
                                            onClick={() => updateNote(data)}
                                        >
                                            <i className='bx bx-pencil'></i>
                                        </button>
                                        <button
                                            className="btn"
                                            id="delete-notes"
                                            onClick={() => deleteNote(data)}
                                            >
                                            <i className='bx bx-trash'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="note-update-content">
                                    {data.description}
                                </div>
                                <div className="note-update-time" >
                                    <p>{days(new Date())}days ago</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <UpdateNote 
                show={modelShow}
                onHide={() => setModalShow(false)}
            />

        </>

    )
}




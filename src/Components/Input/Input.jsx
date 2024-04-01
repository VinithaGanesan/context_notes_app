import React, { useContext, useState } from 'react'
import './Input.css';
import { NotesContext } from '../../Contexts/NotesContext';

const icons = ["bx-bold", "bxs-color-fill", "bx-list-ul", "bx-font-color", "bx-align-left", "bx-undo", "bx-redo"];


export default function Input() {

    const {dispatch} = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [endtime, setEndtime] = useState('');

    const AddNote = (e) => {
        e.preventDefault();
        console.log({title,description});
        dispatch({type:'ADD_NOTE', payload:{title,description}})
        setTitle('');
        setDescription('');
    } 


    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    return (
        <div className="notes-create-container shadow">
            <div className="add-notes">
                <h2 className="mb-4"><b>Add a Note</b></h2>
                <input
                    className="form-control mb-4"
                    type="text" id="title"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="form-control"
                    id="description"
                    placeholder="Take a note..."
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
            </div>

            <div
                className="set-time icon-link"
                onChange={e => setEndtime(e.target.value)}
                value={endtime}>
                <i className='bx bx-time-five bx-sm'></i>
                {`Today, ${formatAMPM(new Date())}`}
            </div>

            <div className="toolbar bx-md">
                <div>
                    {
                        icons.map((icon, index) => (
                            <i className={`bx ${icon}`} key={`${index}`}></i>
                        ))
                    }
                </div>
                <div>
                    <button
                        className="btn"
                        id="add-notes"
                        onClick={e => AddNote(e)}
                    >
                        Save
                    </button>
                </div>
            </div>

        </div>
    )
}



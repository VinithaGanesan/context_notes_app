import React, { useContext, useState } from 'react'
import './TaskInput.css'
import { TasksContext } from '../../Contexts/TaskContext';

export default function TaskInput() {

    const {dispatch} = useContext(TasksContext)

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [enddate,setEndDate] = useState('');
    const [endtime,setEndTime] =useState('');

    const addTask = (e) => {
        e.preventDefault();
        console.log({title,description,enddate,endtime})
        dispatch({type:'ADD_TASK',payload:{title,description,enddate,endtime}})
        setTitle('');
        setDescription('');
        setEndDate('');
        setEndTime('');
    }


    return (
        <div className="task-create-container shadow">
            <div className="add-task">
                <h2 className="mb-4"><b>Add a Task</b></h2>
                <input
                    className="form-control mb-4"
                    type="text" id="title"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="form-control mb-4"
                    id="description"
                    placeholder="Take a task..."
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="set-time">
                <input
                    className="form-control mb-4"
                    type="date" id="enddate"
                    placeholder="enddate"
                    value={enddate}
                    onChange={e => setEndDate(e.target.value)}
                />
                <input
                    className="form-control mb-4"
                    type="time" id="endtime"
                    placeholder="endtime"
                    value={endtime}
                    onChange={e => setEndTime(e.target.value)}
                />
            </div>
            <div className="save-task">
                <button
                    className="btn"
                    id="add-notes"
                    onClick={e => addTask(e)}>
                    Save
                </button>
            </div>
        </div>
    )
}

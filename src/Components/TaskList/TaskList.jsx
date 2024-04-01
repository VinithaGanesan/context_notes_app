import React, { useContext } from "react";
import { TasksContext } from "../../Contexts/TaskContext";
import './TaskList.css';
import TimeStamp from "../TimeStamp/TimeStamp";
import StarRadioButton from "../StarRadioButton/StarRadioButton";

const TasksList = () => {
    const { state, dispatch } = useContext(TasksContext);

    const { tasksList } = state;


    const handleStarChange = (isChecked) => {
        console.log('Star checked', isChecked);

    }

    return (
        <>
            <div className="saved-task-container">
                <div className="icon-link task-heading">
                    <i className='bx bx-list-check bx-sm'></i>
                    My Tasks
                </div>

                <div className="saved-task shadow">
                    {tasksList &&
                        tasksList.map((task, index) => {
                            return (
                                <div className="task-updated shadow" key={task.id}>
                                    <div className="task-update">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={task.id} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                <div className="task-tile">
                                                    <div>{task.title}</div>
                                                </div>
                                                <div>
                                                    <TimeStamp timeStamp={task.enddate} />
                                                </div>
                                            </label>
                                        </div>

                                        <div>
                                            <StarRadioButton 
                                            id={task.id}
                                            name={task.title}
                                            onChange={() => handleStarChange()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default TasksList;
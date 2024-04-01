import React from 'react'
import TaskInput from '../Components/TaskInput/TaskInput'
import TasksList from '../Components/TaskList/TaskList'

export default function Tasks() {
  return (
    <div>
      <TaskInput/>
      <TasksList/>
    </div>
  )
}

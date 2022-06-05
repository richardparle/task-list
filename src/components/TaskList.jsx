import Task from './Task';

const TaskList = ({ tasks, setTasks }) => {
   return (
      <div className='task-container'>
         <ul className='task-list'>
            {tasks.map((task) => {
               return (
                  <Task 
                     setTasks={setTasks}
                     tasks={tasks}
                     key={task.id} 
                     task={task} 
                     text={task.text} 
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default TaskList;
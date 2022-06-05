const Task = ({ text, task, tasks, setTasks } ) => {

   const deleteHandler = () => {
      const filtered = tasks.filter((el) => el.id !== task.id)
         setTasks(filtered)
   }

   const completeHandler = () => {
      setTasks(tasks.map((item) => {
         if(item.id === task.id) {
            return {
               ...item, completed: !item.completed
            }
         }
         return item;
      }))
   }

   return (
      <div className="task">
         <li className={`task-item ${task.completed ? 'completed' : ""}`}>{text}</li>
         <button onClick={completeHandler} className="complete-btn">√</button>
         <button onClick={deleteHandler} className="delete-btn">X</button>
      </div>
   )
}

export default Task;
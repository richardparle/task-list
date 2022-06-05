const Input = ({ inputText, setInputText, tasks, setTasks }) => {
   const inputTextHandler = (e) => {
      setInputText(e.target.value)
   }
   const submitTaskHandler = (e) => {
      e.preventDefault()
      setTasks([
         ...tasks, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
      ])
      setInputText('')
   }
   return (
      <form>
         <input value={inputText} 
            onChange={inputTextHandler} 
            type='text' 
            className='task-input'/>
            <button 
               onClick={submitTaskHandler} 
               type='submit' 
               className='task-button'>
               +
            </button>
      </form>
   )
}

export default Input;
import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <Input
        tasks={tasks}
        setTasks={setTasks}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

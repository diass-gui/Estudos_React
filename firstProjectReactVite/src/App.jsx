import { useState } from "react";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './App.css'

function App() {

  const [tarefas, setTarefa] = useState([
  {
    id: 1,
    title: "Task 1", 
    completed: true
  }, 
  {
    id: 2,
    title: "Task 2", 
    completed: true
  }, 
  { 
    id: 3,
    title: "Task 3", 
    completed: false
  }
  ])

  function handleAddClick() {
    setTarefa([...tarefas, {
      id: 4,
      title: "Task 4",
      completed: false
      // id: tarefas.length+1,
      // title: "Task "+tarefas.length+1,
    }])
  }

  return (
    <>
      <ul>
        {tarefas.map(tarefas => <li key={tarefas.id}>{tarefas.title}</li>)}
      </ul>

      {/* Event handler */}
      <button onClick={handleAddClick}>Adicionar Tarefa</button>
    </>
  )
}

export default App;

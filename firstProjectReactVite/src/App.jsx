import AddTask from "./components/AddTask.jsx";
import APITasks from "./components/APITasks.jsx"
import Tasks from "./components/Tasks.jsx";
import React, { useState } from 'react';


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
  ]);

  function handleAddClick(inputTitle) {
    setTarefa((valorAtualdoState) => {
      return [
        ...valorAtualdoState, {
          id: Math.random(),
          title: inputTitle,
          completed: false
        }
      ]
    })
  };
  
  return (
    <div className="bg-zinc-900 h-screen w-screen flex flex-col items-center justify-center">
      {/* <AddTask handleAddClick={handleAddClick}/>
      <Tasks propTasks={tarefas} propHandleAddClick={handleAddClick}/> */}
      <APITasks />
    </div>
  )
}

export default App;
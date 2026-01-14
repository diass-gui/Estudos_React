import { useState } from 'react';

function Tasks() {

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

  console.log("começo aqui")

  function handleAddClick() {
    console.log("Passo por aqui")
    setTarefa((valorAtualdoState) => {
      return [
        ...valorAtualdoState, {
          id: 4,
          title: "Task 4",
          completed: false
        }
      ]
    })
  };

  return (
    <>
      <ul>
        {tarefas.map(tarefas => <li key={tarefas.id}>{tarefas.title}</li>)}
      </ul>

      {/* Event handler */}
      <button onClick={handleAddClick}>Adicionar Tarefa</button>
      {console.log("Termino aqui")}
    </>
  );
};

export default Tasks;
import { useState } from 'react';
import './Tasks.css';

function Tasks(props) {

  return (
    <div className='w-64'>
      <ul className='space-y-2 max-h-62.5 overflow-auto'>
        {props.propTasks.map(tarefas => 
        <li key={tarefas.id} className='bg-indigo-100 p-4 rounded-xl'>{tarefas.title}</li>)}
      </ul>

      {/* Event handler */}
      {/* <button className='bg-indigo-100 border-indigo-400 border-solid border font-semibold p-4 rounded-lg mt-2 w-full' onClick={props.propHandleAddClick}>Adicionar Tarefa</button> */}
    </div>
  );
};

export default Tasks;
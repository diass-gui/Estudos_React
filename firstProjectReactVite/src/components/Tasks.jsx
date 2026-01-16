import { useState } from 'react';
import './Tasks.css';

function Tasks({ tasks, handleDeleteClick }) {

  return (
    <div className='w-[400px]'>
      <ul className='space-y-2 max-h-[400px] overflow-auto px-4'>
        {tasks.map((task) => (
        <li key={task.id} className='flex gap-4'>
        <div className='bg-indigo-400 p-4 rounded-xl w-full'>
          <p>{task.title}</p>
        </div>
        {/* {console.log(task.id)} */}
        <button onClick={() => handleDeleteClick(task.id)} className='p-1.5 rounded-xl'>🗑</button>
        </li>))}
      </ul>
    </div>
  );
};

export default Tasks;
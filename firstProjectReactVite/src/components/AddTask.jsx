import { useState } from 'react';

function AddTask(props) {

    const [inputTitle, setInputTitle] = useState('');

    return (
    <form className="flex gap-2 items-center mb-2" onSubmit={(event) => {
        event.preventDefault();
        props.handleAddClick(inputTitle)
        setInputTitle("");
    }}>
        <input 
          value={inputTitle}
          onChange={(event) => setInputTitle(event.target.value)}
          placeholder="Titulo da tarefa"
          className="bg-indigo-300 p-4 rounded-lg"
        />
        <button type="submit" className="bg-indigo-300 p-4 rounded-lg">+</button>
    </form>
    )
}

export default AddTask;
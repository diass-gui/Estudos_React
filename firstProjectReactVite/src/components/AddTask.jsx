function AddTask() {
    return (
        <div>
            <input type="text" placeholder="Título da Tarefa"></input><br /><br />
            <input type="text" placeholder="Descrição da Tarefa"></input><br /><br />
            <button> Adicionar Tarefa </button>

            {/* <input type="text" className="titulo_tarefa" placeholder="Título da Tarefa"></input><br /><br />
            <input type="text" className="descricao_tarefa" placeholder="Descrição da Tarefa"></input><br /><br />
            <button className="botao_addtask"> Adicionar Tarefa </button> */}
        </div>
    )
}

export default AddTask;
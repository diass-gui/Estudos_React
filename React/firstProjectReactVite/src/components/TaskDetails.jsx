import { useParams } from "react-router";

function TaskDetails() {

    const params = useParams();

    return <h1>Detalhes da Tarefa {params.taskId}</h1>
}

export default TaskDetails;
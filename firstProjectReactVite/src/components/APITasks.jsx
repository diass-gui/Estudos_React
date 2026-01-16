import { useQuery, useQueryClient } from "@tanstack/react-query";
import Tasks from "./Tasks"
import { useEffect, useState } from "react";

function APITasks(props) {

    const queryClient = useQueryClient();

    const { data, isPending} = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=10"
            );
            const responseJson = await response.json();
            return responseJson;
        }
    })

    // const[isLoading, setIsLoading] = useState(true);
    // const[tasksFetch, setTasksFetch] = useState([]);

    // Hook
    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchTasks = async() => {
    //         const response = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos?_limit=10"
    //         );
    //         const responseJson = await response.json();
    //         console.log(responseJson)
    //         setTasksFetch(responseJson);
    //         setIsLoading(false);
    //     }
    //     fetchTasks()
    // }, [])

    function handleDeleteClick(tasksId) {
        queryClient.setQueryData(['tasks'], (valorAtualdaQuery) => {
            return valorAtualdaQuery.filter((task) => task.id != tasksId);
        })
        // setTasksFetch((valorAtualdoState) => 
        //     valorAtualdoState.filter((task) => task.id != tasksId));
        // console.log("Tarefa removida com sucesso!")
    }

    if(isPending) {
        return <p className="text-white">Carregando tarefas...</p>
    }
    
    return (
    <>
        {props.children}
        <Tasks tasks={data} handleDeleteClick={handleDeleteClick}/>
    </>
    )
}

export default APITasks;
import { useEffect, useState } from "react";
import api from "../../services/api";
import AddTask from "../AddTask";
import TaskItem from "../TaskItem";
import "./styles.scss";

type TaskItemParams = {
    id: number,
    description: string,
    isCompleted: boolean

}

export default function Tasks() {
    const [tasks, setTasks] = useState<TaskItemParams[]>();

    const fetchTasks = async () => {
        try {
            const { data } = await api.get('tasks');
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {

        fetchTasks();

    }, []);
    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />


                <div className="tasks-list">
                    {tasks && (
                        tasks.filter(task => task.isCompleted === false).map(lasTask => (
                            <TaskItem
                                key={lasTask.description}
                                task={lasTask}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>

                <div className="tasks-list">
                    {tasks && (
                        tasks.filter(task => task.isCompleted).map(completedTask => (
                            <TaskItem
                                key={completedTask.description}
                                task={completedTask}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
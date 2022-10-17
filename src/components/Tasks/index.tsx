import { useEffect, useState } from "react";
import api from "../../services/api";
import AddTask from "../AddTask";
import TaskItem from "../TaskItem";
import "./styles.scss";

export default function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: "Estudar programação",
            isCompleted: false
        },
        {
            id: 2,
            description: "Ler",
            isCompleted: true
        },
    ]);


    useEffect(() => {

        const fetchTasks = async () => {
            try {
                const { data } = await api.get('tasks');
                // setTasks(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTasks();

    }, []);
    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask />
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted === false).map(lasTask => (
                        <TaskItem
                            key={lasTask.id}
                            task={lasTask}
                        />
                    ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted).map(completedTask => (
                        <TaskItem
                            key={completedTask.id}
                            task={completedTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
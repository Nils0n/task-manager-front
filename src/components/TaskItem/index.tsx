import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./styles.scss";

type TaskItemParams = {
    task: {
        _id: number,
        description: string,
        isCompleted: boolean
    };

    fetchTasks: () => Promise<void>;
}

export default function TaskItem({ task, fetchTasks }: TaskItemParams) {
    const handleTaskDeletion = async () => {
        try {
            await api.delete(`tasks/${task._id}`);
            await fetchTasks();
            toast.success("Tarefa excluida com sucesso", {
                position: "top-center",
                autoClose: 1500,
                theme: "colored",
            });
        } catch (error) {
            toast.error("Error ao tentar deletar!", {
                position: "top-center",
                autoClose: 1500,
                theme: "colored",
            });
            console.log(error);
        }
    }



    return (
        <div className="task-item-container">
            <div className="task-description">
                <label className={
                    task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'
                }>
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                    />
                    <span
                        className={
                            task.isCompleted ?
                                "checkmark completed" :
                                "checkmark"
                        }
                    >

                    </span>
                </label>
            </div>
            <div className="delete" onClick={handleTaskDeletion}>
                <AiFillDelete size={18} color="#F97474" />
            </div>
        </div>
    )
}
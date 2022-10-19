import { AiFillDelete } from "react-icons/ai";
import api from "../../services/api";
import "./styles.scss";

type TaskItemParams = {
    task: {
        _id: number,
        description: string,
        isCompleted: boolean
    }
}

export default function TaskItem({ task }: TaskItemParams) {
    const handleTaskDeletion = async () => {
        try {
            await api.delete(`tasks/${task._id}`);
        } catch (error) {
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
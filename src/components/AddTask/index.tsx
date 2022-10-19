import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../services/api";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput.tsx";
import "./styles.scss";


type AddTaskParams = {
    fetchTasks: () => Promise<void>;
}

export default function AddTask({ fetchTasks }: AddTaskParams) {
    const [task, setTask] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTask(e.currentTarget.value);
    }

    const handleTaskAddtion = async () => {
        try {
            if (task.length === 0) {
                toast.warning("A tarefa precisa de uma descrição para ser adicionada", {
                    position: "top-center",
                    autoClose: 1500,
                    theme: "colored",
                });

                return;
            }

            await api.post('tasks/', { description: task, isCompleted: false });
            setTask("");
            await fetchTasks();
            toast.success("Tarefa adicionada com sucesso!", {
                position: "top-center",
                autoClose: 1500,
                theme: "colored",
            });

        } catch (error) {

        }
    }

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddtion}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    )
}
import React, { useState } from "react";
import CustomInput from "../CustomInput.tsx";
import "./styles.scss";

export default function AddTask() {
    const [task, setTask] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTask(e.currentTarget.value);
    }

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
        </div>
    )
}
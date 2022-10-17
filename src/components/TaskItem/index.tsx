type TaskItemParams = {
    task: {
        id: number,
        description: string,
        isCompleted: boolean
    }

}

export default function TaskItem({ task }: TaskItemParams) {
    return (
        <h1>{task.description}</h1>
    )
}
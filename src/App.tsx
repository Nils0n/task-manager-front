import { useEffect, useState } from 'react'
import TaskItem from './components/TaskItem';
import api from './services/api';

function App() {
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
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </>
  )
}

export default App

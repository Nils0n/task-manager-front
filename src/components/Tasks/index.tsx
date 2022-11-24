import { useEffect, useState, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import AddTask from '../AddTask';
import TaskItem from '../TaskItem';
import './styles.scss';

type TaskItemParams = {
    _id: number,
    description: string,
    isCompleted: boolean

}

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskItemParams[]>();

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await api.get('tasks');
      setTasks(data);
    } catch (error) {
      console.log(error);
      toast.error('Error ao tentar deletar!', {
        position: 'top-center',
        autoClose: 1500,
        theme: 'colored',
      });
    }
  }, []);

  const lastTasks = useMemo(() => {
    return tasks?.filter(task => task.isCompleted === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks?.filter(task => task.isCompleted === true);
  }, [tasks]);

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
          {
            lastTasks?.map(lasTask => (
              <TaskItem
                key={lasTask._id}
                task={lasTask}
                fetchTasks={fetchTasks}
              />
            ))
          }
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>

        <div className="tasks-list">
          {
            completedTasks?.map(completedTask => (
              <TaskItem
                key={completedTask._id}
                task={completedTask}
                fetchTasks={fetchTasks}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
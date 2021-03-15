import Header from '../Header';
import Task from './Task';
import style from 'styles/components/Tasks.module.scss';
import { useFetch } from '@/src/hooks/useFetch';
import { ITask } from '@/interfaces';
import Loading from '@/src/utils/Loading';

const Tasks: React.FC = () => {
  const { data: tasks } = useFetch<ITask[]>('/api/tasks');

  const createNewTask = () => {
    alert('creating');
  };

  if (!tasks) return <Loading />;

  return (
    <main className={style.container}>
      <Header title="Todas as tarefas" callback={createNewTask} />

      <div className={style.tasks}>
        {tasks.map((task) => (
          <Task key={String(task._id)} data={task} />
        ))}
      </div>
    </main>
  );
};

export default Tasks;

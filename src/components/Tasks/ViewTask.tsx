import { ITask } from '@/interfaces';
import { useFetch } from '@/src/hooks/useFetch';
import Loading from '@/src/utils/Loading';

interface IViewTask {
  taskID: string;
}

const ViewTask: React.FC<IViewTask> = ({ taskID }) => {
  const { data } = useFetch<ITask[]>(`/api/tasks/${taskID}`);

  if (!data) return <Loading />;

  const task = data[0];

  return <h1>{task.title}</h1>;
};

export default ViewTask;

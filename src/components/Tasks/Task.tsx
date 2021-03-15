import { ITask } from '@/interfaces';
import Link from 'next/link';
import { MdDone } from 'react-icons/md';
import style from 'styles/components/Tasks.module.scss';

interface ITaskComponent {
  data: ITask;
}

interface ICheckbox {
  completed?: boolean;
}

const Task: React.FC<ITaskComponent> = ({ data: task }) => {
  const TaskLink: React.FC = ({ children }) => (
    <Link href={`/?taskID=${task._id}`} as={`/task/${task._id}`}>
      <a>{children}</a>
    </Link>
  );

  const Checkbox = ({ completed = false }: ICheckbox) => {
    const completedClass = completed ? style.completed : '';

    return (
      <div className={`${style.checkbox} ${completedClass}`}>
        <MdDone />
      </div>
    );
  };

  return (
    <TaskLink>
      <div className={style.task}>
        <div className={style.content}>
          <Checkbox completed={task.completed} />

          <span className={style.title}>{task.title}</span>
        </div>

        <div className={style['right-side']}>
          <span className={style['task-id']}>#288</span>
        </div>
      </div>
    </TaskLink>
  );
};

export default Task;

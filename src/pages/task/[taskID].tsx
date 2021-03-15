import { useRouter } from 'next/router';
import { NextPage } from 'next';

const TaskPage: NextPage = () => {
  const router = useRouter();
  const { taskID } = router.query;

  return <h1>{taskID}</h1>;
};

export default TaskPage;

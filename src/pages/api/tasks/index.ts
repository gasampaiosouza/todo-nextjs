import { IReturning, ITask } from '@/interfaces';
import TasksModel from '@/models/TasksModel';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const handleReturning = ({
    data,
    error,
    message,
    status,
  }: IReturning<ITask[]>) => {
    if (error) return res.status(status).json({ message });

    return res.status(status).json(data);
  };

  if (method === 'GET') {
    const { data, error, message, status } = await TasksModel().get();

    return handleReturning({ data, error, message, status });
  }

  if (method === 'POST') {
    const task: ITask = body;
    const { data, error, message, status } = await TasksModel().create(task);

    return handleReturning({ data, error, message, status });
  }

  return res.status(500).json({ error: 'Method not allowed!' });
};

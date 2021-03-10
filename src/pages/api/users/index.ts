import { IReturning, IUser } from '@/interfaces';
import UsersModel from '@/models/UsersModel';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const handleReturning = ({
    data,
    error,
    message,
    status,
  }: IReturning<IUser[]>) => {
    if (error) return res.status(status).json({ message });

    return res.status(status).json(data);
  };

  if (method === 'GET') {
    const { data, error, message, status } = await UsersModel().get();

    return handleReturning({ data, error, message, status });
  }

  if (method === 'POST') {
    const user: IUser = body;
    const { data, error, message, status } = await UsersModel().create(user);

    return handleReturning({ data, error, message, status });
  }

  return res.status(500).json({ error: 'Method not allowed!' });
};

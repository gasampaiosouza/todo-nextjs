import { ITask } from '@/interfaces';
import TasksModel from '@/models/TasksModel';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const _id = new ObjectId(String(query._id));

  if (method === 'PUT') {
    const body: ITask = req.body;

    const { data, error, message, status } = await TasksModel().update(
      _id,
      body,
    );

    if (error) return res.status(status).json({ message });

    return res.status(status).json(data);
  }

  if (method === 'GET') {
    const { data, error, message, status } = await TasksModel().get({ _id });

    if (error) return res.status(status).json({ message });

    return res.status(status).json(data);
  }

  return res.status(500).json({ error: 'Method not allowed!' });
};

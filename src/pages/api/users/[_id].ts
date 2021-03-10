import UsersModel from '@/models/UsersModel';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;

  if (method !== 'GET') {
    return res.status(500).json({ error: 'Method not allowed!' });
  }

  const _id = new ObjectId(String(query._id));
  const { data, error, message, status } = await UsersModel().get({ _id });

  if (error) return res.status(status).json({ message });

  return res.status(status).json(data);
};

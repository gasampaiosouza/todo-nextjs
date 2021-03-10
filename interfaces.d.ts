import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  tasks?: ITask[];
}

export interface ITask {
  _id?: ObjectId;
  title: string;
  completed: boolean;
  dueDate: string;
}

export interface IReturning<T> {
  message: string;
  status: number;
  data: T | null;
  error: boolean;
}

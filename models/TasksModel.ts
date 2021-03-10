import { connectToDatabase } from '@/config/mongodb';
import { IReturning, ITask } from '@/interfaces';
import { FilterQuery, ObjectId } from 'mongodb';

type IReturningFunc = (
  message: string,
  status: number,
  data?: ITask[] | null,
) => IReturning<ITask[]>;

function UsersModel() {
  const collection = 'tasks';
  const singular = 'task';
  const plural = 'tasks';

  const createReturning: IReturningFunc = (message, status, data = null) => {
    const error = !data;

    return { error, message, status, data };
  };

  const isMissingParameters = (parameters: any[]) => {
    return (
      parameters.filter((item) => item != undefined).length !==
      parameters.length
    );
  };

  const get = async (options: FilterQuery<any> = {}) => {
    const { db } = await connectToDatabase();

    try {
      const tasks: ITask[] = await db
        .collection(collection)
        .find(options)
        .toArray();

      if (!tasks.length) {
        return createReturning(`Cannot find ${singular}`, 404);
      }

      return createReturning('', 200, tasks);
    } catch (err) {
      const message = `an error ocurred while trying to get ${plural}`;

      return createReturning(message, 400);
    }
  };

  const create = async (task: ITask) => {
    const { title, completed, dueDate } = task;
    const required = [title, completed, dueDate];

    if (isMissingParameters(required)) {
      const message = 'Missing required parameters in request body!';
      return createReturning(message, 422);
    }

    const { db } = await connectToDatabase();

    try {
      const createdUser = await db
        .collection<ITask>(collection)
        .insertOne(task);

      return createReturning('', 200, createdUser.ops);
    } catch (err) {
      const message = `an error ocurred while trying to get ${plural}`;

      return createReturning(message, 400);
    }
  };

  const update = async (idToUpdate: ObjectId, newTask: ITask) => {
    const { db } = await connectToDatabase();

    try {
      await db
        .collection<ITask>(collection)
        .updateOne({ _id: idToUpdate }, { $set: newTask });

      return createReturning('', 200, [newTask]);
    } catch (err) {
      const message = `an error ocurred while trying to get ${plural}`;

      return createReturning(message, 400);
    }
  };

  return { get, create, update };
}

export default UsersModel;

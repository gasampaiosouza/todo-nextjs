import { connectToDatabase } from '@/config/mongodb';
import { IReturning, IUser } from '@/interfaces';
import { FilterQuery } from 'mongodb';

type IReturningFunc = (
  message: string,
  status: number,
  data?: IUser[] | null,
) => IReturning<IUser[]>;

function UsersModel() {
  const collection = 'users';
  const singular = 'user';
  const plural = 'users';

  const createReturning: IReturningFunc = (message, status, data = null) => {
    const error = !data;

    return { error, message, status, data };
  };

  const get = async (options: FilterQuery<any> = {}) => {
    const { db } = await connectToDatabase();

    try {
      const users: IUser[] = await db
        .collection(collection)
        .find(options)
        .toArray();

      if (!users.length) {
        return createReturning(`Cannot find ${singular}`, 404);
      }

      return createReturning('', 200, users);
    } catch (err) {
      const message = `an error ocurred while trying to get ${plural}`;

      return createReturning(message, 400);
    }
  };

  const create = async (user: IUser) => {
    const { name, email, password } = user;
    const required = [email, name, password];
    const isMissingParameters =
      required.filter((item) => item != undefined).length !== required.length;

    if (isMissingParameters) {
      const message = 'Missing required parameters in request body!';
      return createReturning(message, 422);
    }

    const { db } = await connectToDatabase();

    try {
      const createdUser = await db
        .collection<IUser>(collection)
        .insertOne(user);

      return createReturning('', 200, createdUser.ops);
    } catch (err) {
      const message = `an error ocurred while trying to get ${plural}`;

      return createReturning(message, 400);
    }
  };

  return { get, create };
}

export default UsersModel;

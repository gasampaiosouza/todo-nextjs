import { MongoClient, Db } from 'mongodb';

let uri = process.env.MONGODB_URI || ''; // trick ts :(
let dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cachedDb: Db;

if (!uri || !dbName) {
  throw new Error('Please define the environment variables inside .env.local');
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

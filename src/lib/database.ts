import { MongoClient } from 'mongodb';
import type { Collection } from 'mongodb';
import type { User } from './types';

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url);
  await client.connect();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getUserCollection = (): Collection<User> => {
  return getCollection<User>('users');
};

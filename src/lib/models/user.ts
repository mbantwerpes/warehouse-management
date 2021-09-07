import type { User } from '../types';
import type { ObjectId } from 'mongodb';
import { getUserCollection } from '../database';

export const addUser = async (): Promise<ObjectId> => {
  const userCollection = getUserCollection();

  const mockData: User = {
    id: 'huhu',
    role: 'admin',
    name: 'Max Mustermann',
    matrNumber: '123456789',
    email: 'max@mustermann.com',
    telephone: '123456789',
    grpNr: 12,
    grpName: 'Team Blau',
    crAt: '2021-08-11',
    leAt: '2021-08-11',
  };

  const result = await userCollection.insertOne(mockData);

  return result.insertedId;
};

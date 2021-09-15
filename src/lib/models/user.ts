import type { User } from '../types';
import { ObjectId } from 'mongodb';
import { getUserCollection } from '../database';
import { getCurrentDate } from '../utils/time';

export async function getUsers(): Promise<User[]> {
  const userCollection = getUserCollection();
  const users = await userCollection.find({ isDeleted: false }).toArray();
  return users;
}

export async function getUser(id: string): Promise<User> {
  const userCollection = getUserCollection();
  const user = await userCollection.findOne({ _id: new ObjectId(id) });

  if (!user) {
    throw new Error(`Unable to find user with the id: ${id}`);
  }

  return user;
}

export async function getUserByEmailAndPassword(
  email: string,
  password: string
): Promise<User> {
  const userCollection = getUserCollection();
  const user = await userCollection.findOne({ email, password });

  if (!user) {
    throw new Error(`Either email or password was not correct`);
  }

  return user;
}

export async function searchUsers(query: string): Promise<User[]> {
  const userCollection = getUserCollection();
  const techComponents = await userCollection
    .find({ name: { $regex: query, $options: 'i' } })
    .toArray();
  return techComponents;
}

export const addUser = async (user: User): Promise<ObjectId> => {
  const userCollection = getUserCollection();

  user.crAt = getCurrentDate();
  user.leAt = getCurrentDate();
  user.isDeleted = false;

  const result = await userCollection.insertOne(user);

  return new ObjectId(result.insertedId);
};

export async function updateUser(id: string, user: User): Promise<void> {
  const userCollection = getUserCollection();

  user.leAt = getCurrentDate();

  await userCollection.updateOne({ _id: new ObjectId(id) }, { $set: user });
}

export async function deleteUser(id: string): Promise<void> {
  const userCollection = getUserCollection();

  await userCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { isDeleted: true, leAt: getCurrentDate() } }
  );
}

import type { TechComponent } from '../types';
import { ObjectId } from 'mongodb';
import { getTechComponentCollection } from '../database';
import { getCurrentDate } from '../utils/time';

export async function getTechComponents(): Promise<TechComponent[]> {
  const techComponentCollection = getTechComponentCollection();
  const techComponents = await techComponentCollection.find().toArray();
  return techComponents;
}

export async function getTechComponent(id: string): Promise<TechComponent> {
  const techComponentCollection = getTechComponentCollection();
  const techComponent = await techComponentCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!techComponent) {
    throw new Error(`Unable to find techComponent with the id: ${id}`);
  }

  return techComponent;
}

export const addTechComponent = async (
  techComponent: TechComponent
): Promise<ObjectId> => {
  const techComponentCollection = getTechComponentCollection();

  techComponent.crAt = getCurrentDate();
  techComponent.leAt = getCurrentDate();
  techComponent.isDeleted = false;

  const result = await techComponentCollection.insertOne(techComponent);

  return result.insertedId;
};

export async function updateTechComponent(
  id: string,
  techComponent: TechComponent
): Promise<void> {
  const techComponentCollection = getTechComponentCollection();

  techComponent.leAt = getCurrentDate();

  await techComponentCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: techComponent }
  );
}

export async function deleteTechComponent(id: string): Promise<void> {
  const techComponentCollection = getTechComponentCollection();

  await techComponentCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { isDeleted: true, leAt: getCurrentDate() } }
  );
}

import type { TechComponent } from '../types';
import { ObjectId } from 'mongodb';
import { getTechComponentCollection } from '../database';
import { getCurrentDate } from '../utils/time';

export async function getTechComponents(): Promise<TechComponent[]> {
  const techComponentCollection = getTechComponentCollection();
  const techComponents = await techComponentCollection
    .find({ isDeleted: false })
    .toArray();
  return techComponents;
}

export async function getTechComponentsByIdArray(
  ids: string[]
): Promise<TechComponent[]> {
  const techComponentCollection = getTechComponentCollection();
  const objectIds: ObjectId[] = ids.map((id) => new ObjectId(id));
  const techComponents = await techComponentCollection
    .find({ _id: { $in: objectIds } })
    .toArray();
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

export async function searchTechComponents(
  query: string
): Promise<TechComponent[]> {
  const techComponentCollection = getTechComponentCollection();
  const techComponents = await techComponentCollection
    .find({ title: { $regex: query, $options: 'i' } })
    .toArray();
  return techComponents;
}

export const addTechComponent = async (
  techComponent: TechComponent
): Promise<ObjectId> => {
  const techComponentCollection = getTechComponentCollection();

  techComponent.crAt = getCurrentDate();
  techComponent.leAt = getCurrentDate();
  techComponent.isDeleted = false;

  const result = await techComponentCollection.insertOne(techComponent);

  return new ObjectId(result.insertedId);
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

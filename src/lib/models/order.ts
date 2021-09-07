import type { Order, TechComponentOrder } from '../types';
import { ObjectId } from 'mongodb';
import { getOrderCollection } from '../database';
import { getCurrentDate } from '../utils/time';

export async function getOrders(): Promise<Order[]> {
  const orderCollection = getOrderCollection();
  const orders = await orderCollection.find().toArray();
  return orders;
}

export async function getOrder(id: string): Promise<Order> {
  const orderCollection = getOrderCollection();
  const order = await orderCollection.findOne({ _id: new ObjectId(id) });

  if (!order) {
    throw new Error(`Unable to find order with the id: ${id}`);
  }

  return order;
}

export const addOrder = async (
  techComponentOrder: TechComponentOrder[]
): Promise<ObjectId> => {
  const orderCollection = getOrderCollection();

  const currentDate = getCurrentDate();

  const order: Order = {
    studentId: '61373a108a32c6c7b2ac07e3',
    status: 'reserved',
    techComponents: techComponentOrder,
    crAt: currentDate,
    leAt: currentDate,
  };

  const result = await orderCollection.insertOne(order);

  return result.insertedId;
};

export async function updateOrder(id: string, order: Order): Promise<void> {
  const orderCollection = getOrderCollection();

  order.leAt = getCurrentDate();

  await orderCollection.updateOne({ _id: new ObjectId(id) }, { $set: order });
}

import type { AdminKpi, StudentKpi } from '../types/types';
import { getOrderCollection, getTechComponentCollection } from '../database';

export async function getStudentKpi(studentId: string): Promise<StudentKpi> {
  const orderCollection = getOrderCollection();
  const reservedOrders = await orderCollection
    .find({ studentId: studentId, status: 'reserved' })
    .toArray();
  const bookedOrders = await orderCollection
    .find({ studentId: studentId, status: 'booked' })
    .toArray();
  const returnedOrders = await orderCollection
    .find({ studentId: studentId, status: 'returned' })
    .toArray();

  const studentKpi: StudentKpi = {
    reservedAmount: reservedOrders.length,
    bookedAmount: bookedOrders.length,
    returnedAmount: returnedOrders.length,
  };

  return studentKpi;
}

export async function getAdminKpi(): Promise<AdminKpi> {
  const orderCollection = getOrderCollection();
  const reservedOrders = await orderCollection
    .find({ status: 'reserved' })
    .toArray();
  const bookedOrders = await orderCollection
    .find({ status: 'booked' })
    .toArray();
  const returnedOrders = await orderCollection
    .find({ status: 'returned' })
    .toArray();

  const techComponentCollection = getTechComponentCollection();
  const techComponents = await techComponentCollection.find().toArray();

  const adminKpi: AdminKpi = {
    reservedAmount: reservedOrders.length,
    bookedAmount: bookedOrders.length,
    returnedAmount: returnedOrders.length,
    techComponentsAmount: techComponents.length,
  };

  return adminKpi;
}

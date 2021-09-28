import type { Order, StudentKpi } from '../types/types';
import { getOrderCollection } from '../database';

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

export async function getAdminKpi(adminId: string): Promise<Order[]> {
  const orderCollection = getOrderCollection();
  const orders = await orderCollection.find().toArray();
  return orders;
}

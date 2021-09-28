import { Router } from 'express';
import { authAdmin, withAuth } from '../middleware/auth';
import {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  getOrdersFromStudent,
} from '../models/order';
import type { TechComponentOrder } from '../types/types';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const orders = await getOrders();
    res.json(orders);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);
    res.json(order);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.get('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrdersFromStudent(id);
    res.json(order);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const studentId = req.id;
    if (!studentId) throw new Error('No studentId provided');
    const orderData: TechComponentOrder[] = req.body;
    addOrder(orderData, studentId);
    res.json(orderData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.put('/:id', authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const orderData = req.body;
    updateOrder(id, orderData);
    res.json(orderData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

export default router;

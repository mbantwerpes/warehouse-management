import { Router } from 'express';
import { getOrders, getOrder, addOrder, updateOrder } from '../models/order';
import type { Order, TechComponentOrder } from '../types';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const orders = await getOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const orderData: TechComponentOrder[] = req.body;
    addOrder(orderData);
    res.json(orderData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const orderData = req.body;
    updateOrder(id, orderData);
    res.json(orderData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

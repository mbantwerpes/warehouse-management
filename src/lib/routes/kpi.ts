import { Router } from 'express';
import { getStudentKpi, getAdminKpi } from '../models/kpi';

const router = Router();

router.get('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const orders = await getStudentKpi(id);
    res.json(orders);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.get('/admin', async (_req, res) => {
  try {
    const orders = await getAdminKpi();
    res.json(orders);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

export default router;

import { Router } from 'express';
import {
  getTechComponents,
  getTechComponent,
  addTechComponent,
  updateTechComponent,
  deleteTechComponent,
} from '../models/techComponent';
import type { TechComponent } from '../types';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const techComponents = await getTechComponents();
    res.json(techComponents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const techComponent = await getTechComponent(id);
    res.json(techComponent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const techComponentData: TechComponent = req.body;
    addTechComponent(techComponentData);
    res.json(techComponentData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const techComponentData = req.body;
    updateTechComponent(id, techComponentData);
    res.json(techComponentData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    deleteTechComponent(id);
    res.json(id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

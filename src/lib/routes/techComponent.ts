import { Router } from 'express';
import {
  getTechComponents,
  getTechComponent,
  searchTechComponents,
  addTechComponent,
  updateTechComponent,
  deleteTechComponent,
  getTechComponentsByIdArray,
} from '../models/techComponent';
import type { TechComponent } from '../types';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { query } = req.query;
    // If query exists use search function else get all
    if (query && typeof query === 'string') {
      const techComponents = await searchTechComponents(query);
      res.json(techComponents);
    } else {
      const techComponents = await getTechComponents();
      res.json(techComponents);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/multiple', async (req, res) => {
  try {
    const query = req.query;
    const ids: string[] = query.id as string[];
    if (query) {
      console.log(await getTechComponentsByIdArray(ids));
    }
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

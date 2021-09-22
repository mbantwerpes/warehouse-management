import { Router } from 'express';
import { authAdmin } from '../middleware/auth';
import {
  getTechComponents,
  getTechComponent,
  searchTechComponents,
  addTechComponent,
  updateTechComponent,
  deleteTechComponent,
  getTechComponentsByIdArray,
} from '../models/techComponent';
import type { TechComponent } from '../types/types';
import uploadFile from '../middleware/imageUpload';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { searchValue } = req.query;
    const { cartRequest } = req.query;
    const ids = req.query.id as string[];
    if (ids) {
      // If only one id is given, then it is not an array
      if (typeof ids === 'string') {
        const techComponent = await getTechComponent(ids);
        res.json([techComponent]);
      } else {
        const techComponents = await getTechComponentsByIdArray(ids);
        res.json(techComponents);
      }
    }
    // If searchValue exists use search function else get all
    else if (searchValue && typeof searchValue === 'string') {
      const techComponents = await searchTechComponents(searchValue);
      res.json(techComponents);
    } else if (!cartRequest) {
      const techComponents = await getTechComponents();
      res.json(techComponents);
    }
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const techComponent = await getTechComponent(id);
    res.json(techComponent);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.post('/', authAdmin, uploadFile.single('file'), async (req, res) => {
  try {
    const path = req.file?.path;
    const mimetype = req.file?.mimetype;
    const techComponentData: TechComponent = { ...req.body, path, mimetype };
    // const techComponentData: TechComponent = req.body;
    addTechComponent(techComponentData);
    res.json(techComponentData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.put('/:id', authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const techComponentData = req.body;
    updateTechComponent(id, techComponentData);
    res.json(techComponentData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    deleteTechComponent(id);
    res.json(id);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

export default router;
